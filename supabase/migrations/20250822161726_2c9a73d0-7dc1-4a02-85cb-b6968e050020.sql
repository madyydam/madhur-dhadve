-- Enable public access to insert messages from contact form
-- This allows anyone to submit contact form messages without authentication

CREATE POLICY "Anyone can insert messages" 
ON public.messages 
FOR INSERT 
WITH CHECK (true);

-- Optional: Allow viewing messages (you might want to restrict this later)
CREATE POLICY "Public can view messages" 
ON public.messages 
FOR SELECT 
USING (true);