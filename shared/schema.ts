import { sql } from "drizzle-orm";
import { pgTable, text, varchar, json, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const resumes = pgTable("resumes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  filename: text("filename").notNull(),
  originalContent: text("original_content").notNull(),
  extractedText: text("extracted_text"),
  optimizedContent: text("optimized_content"),
  atsScore: integer("ats_score").default(0),
  keywordAnalysis: json("keyword_analysis").$type<{
    foundKeywords: string[];
    missingKeywords: string[];
    targetJob?: string;
  }>(),
  scores: json("scores").$type<{
    keywords: number;
    format: number;
    content: number;
    overall: number;
  }>(),
  suggestions: json("suggestions").$type<Array<{
    type: string;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
  }>>(),
  uploadedAt: timestamp("uploaded_at").defaultNow(),
  isProcessed: boolean("is_processed").default(false),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertResumeSchema = createInsertSchema(resumes).pick({
  filename: true,
  originalContent: true,
}).extend({
  file: z.any().optional(),
});

export const updateResumeSchema = createInsertSchema(resumes).pick({
  extractedText: true,
  optimizedContent: true,
  atsScore: true,
  keywordAnalysis: true,
  scores: true,
  suggestions: true,
  isProcessed: true,
}).partial();

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertResume = z.infer<typeof insertResumeSchema>;
export type UpdateResume = z.infer<typeof updateResumeSchema>;
export type Resume = typeof resumes.$inferSelect;
