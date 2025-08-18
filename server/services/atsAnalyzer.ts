interface ATSAnalysisResult {
  scores: {
    keywords: number;
    format: number;
    content: number;
    overall: number;
  };
  keywordAnalysis: {
    foundKeywords: string[];
    missingKeywords: string[];
    targetJob?: string;
  };
}

const COMMON_ATS_KEYWORDS = {
  'software_engineer': [
    'JavaScript', 'Python', 'React', 'Node.js', 'Git', 'API', 'Database', 
    'Agile', 'Testing', 'CI/CD', 'Docker', 'AWS', 'TypeScript', 'SQL'
  ],
  'data_scientist': [
    'Python', 'R', 'Machine Learning', 'SQL', 'Statistics', 'TensorFlow',
    'pandas', 'numpy', 'Data Analysis', 'Visualization', 'Jupyter', 'scikit-learn'
  ],
  'product_manager': [
    'Product Strategy', 'Roadmap', 'Stakeholder', 'Analytics', 'User Research',
    'Agile', 'Scrum', 'KPIs', 'A/B Testing', 'Market Research', 'Competitive Analysis'
  ],
  'marketing': [
    'Digital Marketing', 'SEO', 'SEM', 'Social Media', 'Content Marketing',
    'Email Marketing', 'Analytics', 'Campaign', 'Brand', 'Lead Generation'
  ]
};

export function analyzeATS(resumeText: string, targetJob?: string): ATSAnalysisResult {
  const text = resumeText.toLowerCase();
  
  // Determine job category
  const jobCategory = getJobCategory(targetJob || '');
  const relevantKeywords = COMMON_ATS_KEYWORDS[jobCategory] || COMMON_ATS_KEYWORDS.software_engineer;
  
  // Find keywords present in resume
  const foundKeywords = relevantKeywords.filter(keyword => 
    text.includes(keyword.toLowerCase())
  );
  
  // Find missing keywords
  const missingKeywords = relevantKeywords.filter(keyword => 
    !text.includes(keyword.toLowerCase())
  ).slice(0, 8); // Limit to top 8 missing keywords
  
  // Calculate scores
  const keywordScore = Math.round((foundKeywords.length / relevantKeywords.length) * 100);
  const formatScore = calculateFormatScore(resumeText);
  const contentScore = calculateContentScore(resumeText);
  const overallScore = Math.round((keywordScore * 0.4 + formatScore * 0.3 + contentScore * 0.3));
  
  return {
    scores: {
      keywords: keywordScore,
      format: formatScore,
      content: contentScore,
      overall: overallScore
    },
    keywordAnalysis: {
      foundKeywords,
      missingKeywords,
      targetJob
    }
  };
}

function getJobCategory(targetJob: string): keyof typeof COMMON_ATS_KEYWORDS {
  const job = targetJob.toLowerCase();
  
  if (job.includes('data') || job.includes('scientist') || job.includes('analyst')) {
    return 'data_scientist';
  }
  if (job.includes('product') && job.includes('manager')) {
    return 'product_manager';
  }
  if (job.includes('marketing') || job.includes('digital')) {
    return 'marketing';
  }
  return 'software_engineer'; // default
}

function calculateFormatScore(text: string): number {
  let score = 0;
  const maxScore = 100;
  
  // Check for standard sections
  const sections = ['experience', 'education', 'skills', 'summary', 'objective'];
  const foundSections = sections.filter(section => 
    text.toLowerCase().includes(section)
  );
  score += (foundSections.length / sections.length) * 30;
  
  // Check for bullet points
  if (text.includes('•') || text.includes('-') || text.includes('*')) {
    score += 20;
  }
  
  // Check for proper structure (email, phone)
  if (text.includes('@')) score += 15; // Email
  if (/\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/.test(text)) score += 15; // Phone
  
  // Check length (not too short, not too long)
  const wordCount = text.split(/\s+/).length;
  if (wordCount >= 200 && wordCount <= 800) score += 20;
  else if (wordCount >= 100) score += 10;
  
  return Math.min(score, maxScore);
}

function calculateContentScore(text: string): number {
  let score = 0;
  
  // Check for action verbs
  const actionVerbs = ['developed', 'managed', 'led', 'created', 'implemented', 'designed', 'improved', 'increased', 'reduced'];
  const foundVerbs = actionVerbs.filter(verb => text.toLowerCase().includes(verb));
  score += (foundVerbs.length / actionVerbs.length) * 30;
  
  // Check for quantified achievements (numbers/percentages)
  const hasNumbers = /\d+(%|k|\+|,)/.test(text);
  if (hasNumbers) score += 25;
  
  // Check for industry terms
  const techTerms = ['software', 'development', 'programming', 'project', 'team', 'client', 'system'];
  const foundTerms = techTerms.filter(term => text.toLowerCase().includes(term));
  score += (foundTerms.length / techTerms.length) * 25;
  
  // Avoid common weak words
  const weakWords = ['responsible for', 'duties included', 'helped with'];
  const hasWeakWords = weakWords.some(phrase => text.toLowerCase().includes(phrase));
  if (!hasWeakWords) score += 20;
  
  return Math.min(score, 100);
}
