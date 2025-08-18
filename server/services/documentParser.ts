import { spawn } from "child_process";
import path from "path";

interface ParseResult {
  text: string;
  metadata?: {
    pageCount?: number;
    wordCount?: number;
  };
}

export async function parseDocument(filePath: string, fileType: string): Promise<ParseResult> {
  return new Promise((resolve, reject) => {
    const pythonScript = path.resolve(process.cwd(), "python_scripts", "document_parser.py");
    
    const python = spawn("python", [pythonScript, filePath, fileType]);
    
    let output = "";
    let errorOutput = "";
    
    python.stdout.on("data", (data) => {
      output += data.toString();
    });
    
    python.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });
    
    python.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`Document parsing failed: ${errorOutput}`));
        return;
      }
      
      try {
        const result = JSON.parse(output);
        resolve({
          text: result.text || "",
          metadata: result.metadata || {}
        });
      } catch (error) {
        reject(new Error(`Failed to parse document parsing result: ${error}`));
      }
    });
  });
}

export function getSupportedFileTypes(): string[] {
  return ["pdf", "docx"];
}

export function isFileTypeSupported(mimeType: string): boolean {
  const supportedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword"
  ];
  return supportedTypes.includes(mimeType);
}
