type Project = {
    id: Number;
    title: String;
    background: String;
    challenge: String;
    approach: String;
    impact: String;
    technologies: String[];
}

export const projects:Project[] = [
    {
        id : 1,
        title : "Project 1: Redirect Processing Automation",
        background : "At Simpleview Inc., my team managed the clients' internal and outgoing redirects and sitemaps through our CMS platform. The internal redirect list was quite dynamic as clients would create and delete pages constantly for events and various other campaigns, which pages would often intercept traffic to other pages. When we would redesign a site, often the old list of redirects would need to be audited and cleaned out to remove any that were outdated or unused. This cleaning process would take anywhere from an hour to up to two days, which was too much of a time-sink for our team.",
        challenge : "The goal of this project was to create a REPL script to automate the process of updating and pruning the internal and outgoing redirects list based on certain criteria.",
        approach : "The project started by setting up a Mongo query to the client database to retrieve redirect data.",
        impact : "The automation of this redirect cleaning process saved hours of developer time and standardized the output.",
        technologies : [
            "JavaScript", "JSDoc", "REPL", "MongoDB"
        ]

    },
    {
        id : 2,
        title : "Project Two Test Title THIS IS TWO",
        background: "",
        challenge : "Here's the challenge for #2",
        approach : "The approach of #2",
        impact : "Impact of #2",
        technologies : [
            "tech1", "tech2"
        ]

    }
]