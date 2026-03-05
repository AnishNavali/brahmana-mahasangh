/* eslint-disable @next/next/no-img-element */
'use client';

import React from "react"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export interface MembershipData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  gotra: string;
  profilePhoto: File | null;
}

const GOTRAS = [
  "Bharadwaj", "Kashyap", "Vasishta", "Vishwamitra", "Atri", "Gautam", "Jamadagni",
  "Agastya", "Bhrigu", "Angirasa", "Marichi", "Pulastya", "Pulaha", "Kratu",
  "Shandilya", "Parashara", "Kaushik", "Harita", "Koundinya", "Maitreya",
  "Upamanyu", "Mudgal", "Garga", "Katyayana", "Shaunak", "Galava", "Lomasha",
  "Mandavya", "Shukla", "Devadatta", "Kapila", "Vamadeva", "Vyasa", "Sankruti",
  "Savarna", "Badarayana", "Dhananjaya", "Dadhichi", "Rishyasringa", "Nityananda",
  "Srivatsa", "Satyashraya", "Athreya", "Vadhoola", "Sankhyayana", "Kapi",
  "Bhargava", "Maudgalya", "Hiranyakeshi", "Chandratreya", "Vatsa", "Romasha",
  "Kutsasa", "Shalankayana", "Agniveshya", "Trivikrama", "Yajnavalkya", "Sabarna",
  "Other"
].sort();

export default function RegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<MembershipData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    gotra: '',
    profilePhoto: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.phone.trim()) newErrors.phone = 'Mobile number is required';
    if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.address.trim()) newErrors.address = 'Address/District is required';
    if (!formData.gotra) newErrors.gotra = 'Gotra is required';
    if (!formData.profilePhoto) newErrors.profilePhoto = 'Profile photo is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted with data:', formData);

      // Save form data to localStorage for use in next step
      const formDataForStorage = {
        ...formData,
        photo: photoPreview // Store as 'photo' to match MembershipCard
      };
      localStorage.setItem('registrationData', JSON.stringify(formDataForStorage));

      // Navigate to membership selection page
      router.push('/membership');
    }
  };

  const handleChange = (field: keyof MembershipData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors((prev) => ({
          ...prev,
          profilePhoto: 'Please upload a valid image file',
        }));
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          profilePhoto: 'Image size should be less than 5MB',
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        profilePhoto: file,
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Clear error
      if (errors.profilePhoto) {
        setErrors((prev) => ({
          ...prev,
          profilePhoto: '',
        }));
      }
    }
  };

  return (
    <div className="bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-xl px-4 py-3">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/logo.png"
              alt="Akhila Bharatiya Brahmana Mahasangh Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-primary">
                Akhila Bharatiya Brahmana Mahasangh
              </h1>
              <p className="text-muted-foreground">Membership Registration Portal</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-2xl px-4 py-8">
        <div className="rounded-lg bg-card p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Step 1: Your Details
              </h2>
              <p className="text-sm text-muted-foreground">
                Please provide your personal information to begin the membership registration process.
              </p>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Personal Information</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    First Name *
                  </label>
                  <Input
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    className={errors.firstName ? 'border-destructive' : ''}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-destructive">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Last Name *
                  </label>
                  <Input
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    className={errors.lastName ? 'border-destructive' : ''}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-destructive">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Date of Birth *
                  </label>
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                    className={errors.dateOfBirth ? 'border-destructive' : ''}
                  />
                  {errors.dateOfBirth && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.dateOfBirth}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Gender *
                  </label>
                  {isMounted ? (
                    <Select
                      value={formData.gender}
                      onValueChange={(value) => handleChange('gender', value)}
                    >
                      <SelectTrigger className={errors.gender ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-muted-foreground">
                      Select gender
                    </div>
                  )}
                  {errors.gender && (
                    <p className="mt-1 text-xs text-destructive">{errors.gender}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Mobile Number *
                  </label>
                  <Input
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={errors.phone ? 'border-destructive' : ''}
                    maxLength={10}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Email (Optional)
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Address / District *
                </label>
                <Input
                  placeholder="Enter your address or district"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  className={errors.address ? 'border-destructive' : ''}
                />
                {errors.address && (
                  <p className="mt-1 text-xs text-destructive">{errors.address}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Gotra *
                </label>
                {isMounted ? (
                  <Select
                    value={formData.gotra}
                    onValueChange={(value) => handleChange('gotra', value)}
                  >
                    <SelectTrigger className={errors.gotra ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select your Gotra" />
                    </SelectTrigger>
                    <SelectContent>
                      {GOTRAS.map((gotra) => (
                        <SelectItem key={gotra} value={gotra.toLowerCase()}>
                          {gotra}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <div className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-muted-foreground">
                    Select your Gotra
                  </div>
                )}
                {errors.gotra && (
                  <p className="mt-1 text-xs text-destructive">{errors.gotra}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Profile Photo *
                </label>
                <div className="space-y-4">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className={errors.profilePhoto ? 'border-destructive' : ''}
                  />
                  {errors.profilePhoto && (
                    <p className="mt-1 text-xs text-destructive">{errors.profilePhoto}</p>
                  )}
                  {photoPreview && (
                    <div className="flex justify-center">
                      <img
                        src={photoPreview}
                        alt="Profile preview"
                        className="h-32 w-32 rounded-lg object-cover border-2 border-border"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Continue to Membership Selection
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}