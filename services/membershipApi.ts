/* eslint-disable @typescript-eslint/no-explicit-any */

import { url } from "./api-url";


export interface MembershipRegistrationData {
  name: string;
  phone: string;
  email: string;
  gotra: string;
  photo: string;
  membershipType: string;
  membershipPlan: string;
  membershipPrice: number;
  transactionId: string;
  paymentMethod: string;
  paymentDate: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

class MembershipApiService {
  private static instance: MembershipApiService;
  
  private constructor() {}

  static getInstance(): MembershipApiService {
    if (!MembershipApiService.instance) {
      MembershipApiService.instance = new MembershipApiService();
    }
    return MembershipApiService.instance;
  }

  async registerMembership(data: MembershipRegistrationData): Promise<ApiResponse> {
    try {
      const payload = {
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          gotra: data.gotra,
          photo: data.photo,
          membership_details: {
            type: data.membershipType,
            plan: data.membershipPlan,
            price: data.membershipPrice,
            transaction_id: data.transactionId,
            payment_method: data.paymentMethod,
            payment_date: data.paymentDate
          },
          registration_date: new Date().toISOString()
        }
      };

      const response = await fetch(`${url.backendUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const responseData = await response.json();
      
      if (!response.ok) {
        return {
          success: false,
          message: responseData?.message || 'Registration failed',
          error: responseData?.error
        };
      }
      
      return {
        success: true,
        message: 'Membership registered successfully',
        data: responseData
      };
    } catch (error: any) {
      return {
        success: false,
        message: 'Failed to register membership',
        error: error.message
      };
    }
  }

  async getMembership(transactionId: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${url.backendUrl}/membership/${transactionId}`);
      const responseData = await response.json();
      
      if (!response.ok) {
        return {
          success: false,
          message: responseData?.message || 'Failed to fetch membership',
          error: responseData?.error
        };
      }
      
      return {
        success: true,
        message: 'Membership fetched successfully',
        data: responseData
      };
    } catch (error: any) {
      return {
        success: false,
        message: 'Failed to fetch membership',
        error: error.message
      };
    }
  }
}

export const membershipApi = MembershipApiService.getInstance();