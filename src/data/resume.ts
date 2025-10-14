type Resume = {
    id: Number;
    name: String;
    title: String;
    proSummary: String;
    skills: {};
}

export const resume:Resume = {
    id: 1,
    name: "H. Tate Mitchell",
    title: "Web Developer",
    proSummary: "Detail-oriented developer who specializes in analytics development & SEO, web applications, data-centric programming, and third-party app integration. Improved performance for 300+ client websites, enhanced SEO, and increased user engagement. Collaborated with cross-functional teams to deliver data-driven solutions. Seeking to contribute expertise to a dynamic software or web development team.",
    skills: {
        technical : ["HTML5", "CSS3", "JavaScript", "JSDoc", "MongoDB", "SQL", "Google Analytics", "Google Tag Manager", "Google Search Console", "Looker Studio", "Growth Book", "Git", "GitHub", "RESTful APIs", "JSON", "XML", "Node.js", "jQuery", "Vue", "React", "Next.js"],
        soft : ["multilayer debugging", "problem resolution", "troubleshooting", "teamwork", "agile methodologies", "technical communication"]
    }
}