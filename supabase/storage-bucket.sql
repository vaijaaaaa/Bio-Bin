-- =============================================
-- STORAGE BUCKET SETUP FOR LISTING IMAGES
-- =============================================
-- Run this SQL in your Supabase SQL Editor to create the storage bucket
-- for listing images with proper access policies

-- Create the storage bucket for listing images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'listing-images',
  'listing-images',
  true,
  5242880, -- 5MB in bytes
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- =============================================
-- STORAGE POLICIES
-- =============================================

-- Policy 1: Allow public read access to all images
CREATE POLICY "Public read access for listing images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'listing-images');

-- Policy 2: Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload listing images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'listing-images');

-- Policy 3: Allow users to update their own images
CREATE POLICY "Users can update own listing images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'listing-images' AND auth.uid()::text = (storage.foldername(name))[1])
WITH CHECK (bucket_id = 'listing-images' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Policy 4: Allow users to delete their own images
CREATE POLICY "Users can delete own listing images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'listing-images' AND auth.uid()::text = (storage.foldername(name))[1]);

-- =============================================
-- VERIFICATION
-- =============================================

-- Verify the bucket was created
SELECT * FROM storage.buckets WHERE id = 'listing-images';

-- Verify the policies were created
SELECT * FROM pg_policies WHERE tablename = 'objects' AND policyname LIKE '%listing images%';
