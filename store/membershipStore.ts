import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { membershipApi, MembershipRegistrationData, ApiResponse } from '@/services/membershipApi';

interface MembershipState {
  currentMembership: MembershipRegistrationData | null;
  isLoading: boolean;
  error: string | null;
  registrationHistory: MembershipRegistrationData[];
  
  registerMembership: (data: MembershipRegistrationData) => Promise<ApiResponse>;
  fetchMembership: (transactionId: string) => Promise<void>;
  clearError: () => void;
  resetStore: () => void;
}

type MembershipPersist = PersistOptions<MembershipState>;

export const useMembershipStore = create<MembershipState>()(
  persist<MembershipState>(
    (set) => ({
      currentMembership: null,
      isLoading: false,
      error: null,
      registrationHistory: [],

      registerMembership: async (data: MembershipRegistrationData) => {
        set({ isLoading: true, error: null });
        
        try {
          const response = await membershipApi.registerMembership(data);
          
          if (response.success) {
            const nameParts = data.name.trim().split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';
            
            set((state: MembershipState) => ({
              currentMembership: data,
              registrationHistory: [...state.registrationHistory, data],
              isLoading: false
            }));
            
            localStorage.setItem('membershipComplete', JSON.stringify({
              firstName,
              lastName,
              email: data.email,
              phone: data.phone,
              gotra: data.gotra,
              photo: data.photo,
              membershipType: data.membershipType,
              membershipPlan: data.membershipPlan,
              membershipPrice: data.membershipPrice,
              transactionId: data.transactionId,
              paymentMethod: data.paymentMethod,
              paymentDate: data.paymentDate
            }));
          } else {
            set({ isLoading: false, error: response.message });
          }
          
          return response;
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to register membership';
          set({ 
            isLoading: false, 
            error: errorMessage 
          });
          return {
            success: false,
            message: errorMessage,
            error: errorMessage
          };
        }
      },

      fetchMembership: async (transactionId: string) => {
        set({ isLoading: true, error: null });
        
        try {
          const response = await membershipApi.getMembership(transactionId);
          
          if (response.success && response.data) {
            set({ 
              currentMembership: response.data,
              isLoading: false 
            });
          } else {
            set({ 
              isLoading: false, 
              error: response.message 
            });
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to fetch membership';
          set({ 
            isLoading: false, 
            error: errorMessage 
          });
        }
      },

      clearError: () => set({ error: null }),

      resetStore: () => {
        set({
          currentMembership: null,
          isLoading: false,
          error: null,
          registrationHistory: []
        });
        localStorage.removeItem('membershipComplete');
      }
    }),
    {
      name: 'membership-storage',
      partialize: (state: MembershipState) => ({
        registrationHistory: state.registrationHistory
      })
    } as MembershipPersist
  )
);