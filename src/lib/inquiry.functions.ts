import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  inquiry_type: z.enum(["project", "consultation", "quote"]),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(""),
  project_location: z.string().trim().max(200).optional().default(""),
  project_type: z.string().trim().max(100).optional().default(""),
  services: z.array(z.string().max(40)).max(6).default([]),
  timing: z.string().trim().max(100).optional().default(""),
  description: z.string().trim().min(10).max(5000),
  file_paths: z.array(z.string().max(300)).max(10).default([]),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => inquirySchema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("project_inquiries").insert(data);
    if (error) throw new Error("Could not save inquiry");
    return { ok: true };
  });

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  topic: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().min(5).max(5000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => contactSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_messages").insert(data);
    if (error) throw new Error("Could not save message");
    return { ok: true };
  });
