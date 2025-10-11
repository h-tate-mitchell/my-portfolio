type Project = {
    id: number;
    title: String;
    background: string;
    challenge: String;
    approach: String;
    impact: String;
    technologies: String[];
    imagePath: string;
    imageAlt: string;
}

export const projects:Project[] = [
    {
        id : 1,
        title : "Project: Redirect Processing Automation",
        background : "At Simpleview Inc., my team managed the clients' internal and outgoing redirects and sitemaps through Simpleview’s proprietary CMS platform. The internal redirect database was extremely dynamic as clients would constantly create and archive pages for various events, campaigns and promotions. Clients would often make campaign landing pages redirect traffic away from evergreen pages for more publicity to their events. As the redirect list grew, the site would become less efficient, requiring intervention from our team. This was especially the case for client site redesigns which would import these redirect settings from the old site to the new by default. Our team would conduct audits of the redirect list and would have to manually fix outdated, unused, or conflicting entries. This cleaning process would take anywhere from an hour to two days, which was too much of a time-sink for our team. In order to make our team more efficient, I headed a project to create a REPL script that developers could run in the CMS to automatically fix and update the redirect database.",
        challenge : "Our redirect cleaning process removes duplicate identical entries, removes infinite loops or reflexive redirects, shortens redirect chains to their smallest form, resolves conflicting redirects, and removes any redirects with improper types. The types of redirects implemented in the CMS were path based, exact URL based, and regular expression (regex) based. The most challenging task was making the cleaning algorithms resilient to human input error. Redirects in the CMS could be added by developers via mass import or individually via CMS interface by those with access, clients included. The automation algorithms would have to take varying user input and make consistent, functioning outputs. Examples of human error include the use of characters requiring URL encoding, improper type assignment, incorrect regex, and typos.",
        approach : "Project members were tasked with brainstorming what cleaning operations would have to take place and finding any problem points for each. The methods included: URL encode entry, case correction, remove bad type, remove all but one duplicate entry, remove reflexive entry (a page redirecting to itself), shorten chains, detect and report infinite loops, detect and report conflicting entries (one page redirecting to two or more other pages). We then began prototyping these cleaning functions and testing their output with mock redirect data. Each redirect was a JSON object from the redirects Mongo database, and every entry required the key value pairs of: From, to, type, and status. The status was obtained through Fetch API calls to test the server status of the \”to\” page and map it to the corresponding redirect object. We patterned our test data after these objects, and as we discovered more potential problem points, we would update our test data to target those problems. Each method would output  progress reports and notifications to the console as well as the cleaned data when requested via config settings at the top of the file. The methods were called in an order that one would not undo the work of a previous method. Once our cleaning methods were performing as desired, we used our getter method to request all real entries from the client database and made the data available to the cleaning methods. Finally, once all members of the project team were satisfied with the output of cleaning real database entries, we phased the tool into use. The tool was coded using JavaScript best practices, including thorough documentation of expected input, functionality, and output via JSDoc.",
        impact : "The development of this tool took more than 100 team hours as new challenges presented themselves and new solutions were found. The automation of this redirect cleaning process ended up saving potentially hundreds more hours of developer time by completing a database cleaning in ten to twenty seconds compared to an hour or two at best, and days at worst. The health and consistency of client redirect databases increased drastically, as this tool could be run on demand with extremely low resource consumption. Redirect processing was an essential part of redesign site launches, and this automation ensured that launch schedules would be unaffected by problematic redirect databases. Additionally, the outcome of standardizing redirect entries across client CMS platforms demonstrated proper redirect syntax to clients and account managers, improving awareness and preventing future entry issues.",
        technologies : [
            "JavaScript", "JSDoc", "REPL", "JSON", "Mongo", "MongoDB", "URL Encoding", "Fetch API", "HTTP", "Error Handling", "Process Automation", "Content Management Systems",
        ],
        imagePath: '/assets/photos/cubes-redirect-unsplash.jpg',
        imageAlt: 'Cubes'
    },
    {
        id : 2,
        title : "Project: ASM Global - Analytics Solutions",
        background: "",
        challenge : "Here's the challenge for #2",
        approach : "The approach of #2",
        impact : "Impact of #2",
        technologies : [
            "tech1", "tech2"
        ],
        imagePath: '/assets/photos/stadium-unsplash.jpg',
        imageAlt: 'Baseball Stadium'
    }
]