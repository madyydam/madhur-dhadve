-- Drop the existing primary key on name column
ALTER TABLE public.messages DROP CONSTRAINT messages_pkey;

-- Add a proper id column with UUID
ALTER TABLE public.messages ADD COLUMN id uuid DEFAULT gen_random_uuid();

-- Set id as the new primary key
ALTER TABLE public.messages ADD PRIMARY KEY (id);