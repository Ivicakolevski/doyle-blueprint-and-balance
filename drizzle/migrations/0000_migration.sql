CREATE TABLE public.project_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  inquiry_type text NOT NULL DEFAULT 'project',
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  project_location text,
  project_type text,
  services text[] NOT NULL DEFAULT '{}',
  timing text,
  description text NOT NULL,
  file_paths text[] NOT NULL DEFAULT '{}'
);
GRANT ALL ON public.project_inquiries TO service_role;
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  topic text,
  message text NOT NULL
);
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;