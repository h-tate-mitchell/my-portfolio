type Project = {
    id: Number;
    title: String;
    challenge: String;
    approach: String;
    impact: String;
    technologies: String[];
}

export const projects:Project[] = [
    {
        id : 1,
        title : "Project One Test Title",
        challenge : "Here's the challenge for #1",
        approach : "The approach of #1",
        impact : "Impact of #1",
        technologies : [
            "tech1", "tech2"
        ]

    },
    {
        id : 2,
        title : "Project Two Test Title THIS IS TWO",
        challenge : "Here's the challenge for #2",
        approach : "The approach of #2",
        impact : "Impact of #2",
        technologies : [
            "tech1", "tech2"
        ]

    }
]