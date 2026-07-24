DROP POLICY IF EXISTS "Allow anonymous lead submissions" ON public.leads;
CREATE POLICY "Allow anonymous lead submissions"
ON public.leads
FOR INSERT
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 200
  AND length(trim(email)) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(trim(phone)) BETWEEN 3 AND 40
  AND length(trim(message)) BETWEEN 1 AND 5000
);