import { type User, type InsertUser, type Resume, type InsertResume, type UpdateResume } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createResume(resume: InsertResume): Promise<Resume>;
  getResume(id: string): Promise<Resume | undefined>;
  updateResume(id: string, updates: UpdateResume): Promise<Resume | undefined>;
  deleteResume(id: string): Promise<boolean>;
  getAllResumes(): Promise<Resume[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private resumes: Map<string, Resume>;

  constructor() {
    this.users = new Map();
    this.resumes = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createResume(insertResume: InsertResume): Promise<Resume> {
    const id = randomUUID();
    const resume: Resume = {
      ...insertResume,
      id,
      extractedText: null,
      optimizedContent: null,
      atsScore: 0,
      keywordAnalysis: null,
      scores: null,
      suggestions: null,
      uploadedAt: new Date(),
      isProcessed: false,
    };
    this.resumes.set(id, resume);
    return resume;
  }

  async getResume(id: string): Promise<Resume | undefined> {
    return this.resumes.get(id);
  }

  async updateResume(id: string, updates: UpdateResume): Promise<Resume | undefined> {
    const resume = this.resumes.get(id);
    if (!resume) return undefined;

    const updatedResume = { ...resume, ...updates };
    this.resumes.set(id, updatedResume);
    return updatedResume;
  }

  async deleteResume(id: string): Promise<boolean> {
    return this.resumes.delete(id);
  }

  async getAllResumes(): Promise<Resume[]> {
    return Array.from(this.resumes.values()).sort(
      (a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime()
    );
  }
}

export const storage = new MemStorage();
