-- Add contact_number column to messages table
ALTER TABLE public.messages 
ADD COLUMN contact_number text;