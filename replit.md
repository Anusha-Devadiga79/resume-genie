# Overview

ResumeGenie is an AI-powered resume optimization platform built with React and Express. The application allows users to upload their resumes, analyzes them for ATS (Applicant Tracking System) compatibility, and provides intelligent optimization suggestions using OpenAI's language models. The system includes features for document parsing, keyword analysis, content optimization, and multi-format export capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client application is built using React 18 with TypeScript, utilizing a modern component-based architecture. The UI is constructed with shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable interface elements. The application uses Wouter for lightweight client-side routing and TanStack Query for efficient server state management and API interactions. Styling is handled through Tailwind CSS with custom CSS variables for theming support.

## Backend Architecture
The server is implemented using Express.js with TypeScript, following a RESTful API design pattern. The architecture separates concerns through dedicated service layers for document parsing, ATS analysis, and AI-powered optimization. The application supports file uploads through Multer middleware with configurable size limits and file type validation. Background processing is implemented for computationally intensive tasks like document parsing and AI analysis.

## Data Storage Solution
The system uses an in-memory storage implementation (MemStorage) for development and testing, with a PostgreSQL-compatible schema defined through Drizzle ORM. The database schema includes tables for users and resumes, with support for JSON fields to store complex data structures like keyword analysis results and optimization suggestions. The schema supports rich metadata storage including ATS scores, processing status, and improvement recommendations.

## Document Processing Pipeline
Document parsing is handled through Python scripts that support PDF and DOCX formats using PyPDF2 and python-docx libraries. The system includes NLP capabilities through spaCy for advanced text analysis. File processing is handled asynchronously to prevent blocking the main application thread, with status polling mechanisms to track processing completion.

## AI Integration
The application integrates with OpenAI's GPT-4o model for intelligent resume optimization and improvement suggestions. The AI service layer handles content optimization, keyword enhancement, and personalized recommendations based on target job descriptions. The system includes confidence scoring and structured response handling for consistent AI-generated content.

## Authentication & Security
File upload security is implemented through MIME type validation and size restrictions. The system includes basic session management infrastructure and supports secure file handling with automatic cleanup of temporary files. All API endpoints include proper error handling and validation.

# External Dependencies

## Database Services
- **PostgreSQL**: Primary database system using Neon serverless PostgreSQL for production deployment
- **Drizzle ORM**: Type-safe database toolkit for schema management and query building

## AI & Machine Learning
- **OpenAI API**: GPT-4o model integration for resume content optimization and intelligent suggestions
- **Python Libraries**: PyPDF2 for PDF parsing, python-docx for Word document processing, spaCy for natural language processing

## Frontend Libraries
- **React Query**: Server state management and caching
- **Radix UI**: Accessible component primitives for UI construction
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Wouter**: Lightweight routing library

## Development & Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Backend bundling and compilation
- **TypeScript**: Type system for both frontend and backend code

## File Processing
- **Multer**: File upload handling middleware
- **Python Runtime**: External Python scripts for document parsing and text analysis