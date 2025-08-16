export const templates = [
    { 
        id: "blank", 
        label: "Blank Document", 
        imageUrl: "/blank-document.svg",
        initialContent: "",
    },
    { 
        id: "software-proposal", 
        label: "Software development proposal", 
        imageUrl: "/software-proposal.svg",
        initialContent: `
      <h1>Software Development Proposal</h1>
      <p>Dear [Client Name],</p>
      <p>We are pleased to submit this proposal for the development of [Project Name]. Below are the key objectives and deliverables:</p>
      <ul>
        <li>Scope of Work</li>
        <li>Timeline</li>
        <li>Budget</li>
        <li>Team & Responsibilities</li>
      </ul>
      <p>We look forward to working with you.</p>
      <p>Sincerely,</p>
      <p>[Your Company]</p>
    `,
    },
    { 
       id: "project-proposal", 
        label: "Project proposal", 
        imageUrl: "/project-proposal.svg",
        initialContent: `
      <h1>Project Proposal</h1>
      <p>Project Name: [Insert Project Name]</p>
      <p>Prepared for: [Client Name]</p>
      <p>Prepared by: [Your Name/Company]</p>
      <h2>Executive Summary</h2>
      <p>[Brief overview of project goals and outcomes]</p>
      <h2>Project Details</h2>
      <ul>
        <li>Objectives</li>
        <li>Timeline</li>
        <li>Resources Required</li>
      </ul>
      <p>We hope this proposal meets your expectations.</p>
    `,
    },
    { 
        id: "business-letter", 
        label: "Business letter", 
        imageUrl: "/business-letter.svg",
        initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP]</p>
      <p>[Date]</p>
      <p>[Recipient Name]</p>
      <p>[Recipient Position]</p>
      <p>[Company Name]</p>
      <p>Dear [Recipient Name],</p>
      <p>[Write your letter content here]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
    },
    { 
        id: "resume", 
        label: "Resume", 
        imageUrl: "/resume.svg",
        initialContent: `
      <h1>[Your Name]</h1>
      <p>[Address] | [Email] | [Phone]</p>
      <h2>Objective</h2>
      <p>[Brief career objective]</p>
      <h2>Experience</h2>
      <ul>
        <li>[Job Title] - [Company Name] ([Dates])</li>
        <li>[Achievements / Responsibilities]</li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>[Degree] - [Institution] ([Year])</li>
      </ul>
      <h2>Skills</h2>
      <p>[Skill 1, Skill 2, Skill 3]</p>
    `,
    },
    { 
        id: "cover-letter", 
        label: "Cover letter", 
        imageUrl: "/cover-letter.svg",
        initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP]</p>
      <p>[Date]</p>
      <p>[Hiring Manager Name]</p>
      <p>[Company Name]</p>
      <p>Dear [Hiring Manager Name],</p>
      <p>I am writing to express my interest in the [Position Name] at [Company Name]. With my background in [Your Field], I am confident in my ability to contribute to your team.</p>
      <p>[Highlight key experiences and skills]</p>
      <p>Thank you for considering my application. I look forward to the opportunity to discuss how I can contribute.</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
    },
    { 
        id: "letter", 
        label: "Letter", 
        imageUrl: "/letter.svg",
        initialContent: `
      <p>[Your Name]</p>
      <p>[Address]</p>
      <p>[City, State, ZIP]</p>
      <p>[Date]</p>
      <p>[Recipient Name]</p>
      <p>Dear [Recipient Name],</p>
      <p>[Write your letter content here]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
    },
];