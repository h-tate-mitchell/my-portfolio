type Project = {
    id: number;
    title: String;
    summary: string;
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
        summary: "I led development of a REPL JavaScript script to automate cleaning dynamic client redirects in our proprietary CMS, where temporary pages bloated databases, reduced efficiency, and required manual audits during redesigns that imported legacy settings. I addressed duplicates, infinite loops, chain shortening, conflicts, and human errors (e.g., encoding issues, typos) in path-, URL-, or regex-based redirects; we brainstormed operations, mind-mapped solutions, prototyped with test JSON data, integrated Fetch API for status checks, and ensured method ordering via team testing and JSDoc documentation. The tool processed databases in 10-20 seconds vs. hours or days manually, saved hundreds of hours after a 100 team-hour investment, improved consistency, enabled smooth launches, and educated on syntax—using JavaScript, MongoDB, and URL encoding.",
        background : "At Simpleview Inc., my team managed the clients' internal and outgoing redirects and sitemaps through Simpleview\'s proprietary CMS platform. The internal redirect database was extremely dynamic as clients would constantly create and archive pages for various events, campaigns, and promotions. Clients would often make campaign landing pages redirect traffic away from evergreen pages for more publicity to their events. As the redirect list grew, the site would become less efficient, requiring intervention from our team. This was especially the case for client site redesigns which would import these redirect settings from the old site to the new by default. Our team would conduct audits of the redirect list and would have to manually fix outdated, unused, or conflicting entries. This cleaning process would take anywhere from an hour to two days, which was too much of a time-sink for our team. To make our team more efficient, I lead a project to create a REPL script that developers could run in the CMS to automatically fix and update the redirect database.",
        challenge : "Our redirect cleaning process removed duplicate identical entries, removed infinite loops or reflexive redirects, shortened redirect chains to their smallest form, resolved conflicting redirects, and removed any redirects with improper types. The types of redirects implemented in the CMS were path-based, exact URL-based, and regular expression (regex) based. The most challenging task was making the cleaning algorithms resilient to human input errors. Redirects in the CMS could be added by developers via mass import or individually via CMS interface by those with access, clients included. The automation algorithms had to take varying user input and make consistent, functioning outputs. In this case, examples of human error include the use of characters requiring URL encoding, improper type assignment, incorrect regex, and typos.",
        approach : "To begin, I tasked our project members to brainstorm necessary operations based on our experiences with the redirect cleaning process. For each operation method, I created mind maps to record essential characteristics and any problem points. The methods included: URL encode entry, case correction, remove bad type, remove all but one duplicate entry, remove reflexive entry (a page redirecting to itself), shorten chains, detect and report infinite loops, detect and report conflicting entries (one page redirecting to two or more other pages). I then began prototyping these cleaning functions and testing their output with mock redirect data. Each redirect was a JSON object from the redirects Mongo database, and every entry required the key value pairs of: From, to, and type. To help resolve conflicting redirects, I added a method using the Fetch API to get the redirect endpoint page server status and map it to the corresponding redirect entry. We patterned our test data after these objects, and as we discovered more potential problem points, we would update our test data to target those problems. Each method would output progress reports and notifications to the console as well as the cleaned data when requested via config settings at the top of the file. The methods were called in an order that one would not undo the work of a previous method. Team members were tasked with testing methods they brainstormed and making documented adjustments. Once the cleaning methods worked as desired, I created a getter method to request all real entries from the client database and made the data available to the cleaning methods. Finally, once all members of the project team were satisfied with the output of cleaning real database entries, we phased the tool into use. The tool was coded using JavaScript best practices, including thorough documentation of expected input, functionality, and output via JSDoc.",
        impact : "The development of this tool took more than 100 team hours as new challenges presented themselves and new solutions were found. The automation of this redirect cleaning process ended up saving potentially hundreds more hours of developer time by completing a database cleaning in ten to twenty seconds compared to an hour or two at best, and days at worst. The health and consistency of client redirect databases increased drastically, as this tool could be run on demand with extremely low resource consumption. Redirect processing was an essential part of redesigned site launches, and this automation ensured that launch schedules would be unaffected by problematic redirect databases. Additionally, the outcome of standardizing redirect entries across client CMS platforms demonstrated proper redirect syntax to clients and account managers, improving awareness and preventing future entry issues.",
        technologies : [
            "JavaScript", "JSDoc", "REPL", "JSON", "Mongo", "MongoDB", "URL Encoding", "Fetch API", "HTTP", "Error Handling", "Process Automation", "Content Management Systems"
        ],
        imagePath: '/assets/photos/cubes-redirect-unsplash.jpg',
        imageAlt: 'Cubes'
    },
    {
        id : 2,
        title : "Project: ASM Global - Analytics Solutions",
        summary: "For the partnership of Simpleview Inc. and ASM Global to provide unified venue websites (stadiums, arenas, etc.), I partnered with one teammate to build a custom analytics solution to enable comprehensive marketing insights. I defined a CRM-driven data schema for events and page interactions, integrated Google Tag Manager (GTM), added custom event listeners, and event triggers. I configured GTM for pageviews, custom events, and data export to GA4. This delivered gapless traffic, behavior, and interaction analytics to all launched sites from day one, supported agile custom requests, and ensured 3rd-party compatibility—using HTML, JavaScript, RequireJS, jQuery, Lodash, Google Tag Manager, and Google Analytics. ",
        background: "In July 2023, ASM Global announced a partnership with Simpleview Inc. to provide a unified network of websites and technology for ASM Global's portfolio of venues, including stadiums, arenas, theaters, and convention centers. My role was to ensure that venues could access comprehensive analytics and reporting to optimize their marketing strategies. I and one other team member were selected to install this custom analytics solution from the ground up.",
        challenge : "ASM Global's websites for individual venues were made through white labeling or a templating process, so we were tasked with installing event tracking and analytics solutions onto the base client version of ASM websites before any venue sites were launched. While the ASM product was structured similarly to Simpleview’s existing tourism and hospitality products, it was all freshly built using different frameworks and libraries without any of our existing analytics solutions.",
        approach : "The ASM base client site was built with JavaScript frameworks and libraries such as RequireJS, jQuery, and Lodash. My initial task was to establish a data schema that would encompass all data provided by the client via CRM and any additional data that would provide useful insights. The data schema included CRM data about specific events or conventions viewed such as titles or dates, what page elements were interacted with, page location and referrers, etc. Then, I installed Google Tag Manager support and set up a placeholder container that would also support the base client. GTM was our tool of choice to connect the venue site to Google Analytics, as well as support 3rd party scripts and pixels while doing so. Then, custom event listeners and on-click event triggers were set up for all interactive portions of the UI. These triggers would send link-object specific data to the event listeners higher in the DOM, which would add page data and appropriate user data to the event. This event was then pushed to the data layer to be collected in GTM. GTM was set up to handle pageview events and any extra custom events requested by the client. The data was then provided to Google Analytics 4 (GA4) where the client and associated data analysts could explore it and create necessary reports.",
        impact : "Each venue, stadium, arena, theater, and convention center had their website launch with comprehensive usage data and analytics from day one. These clients have access to all site traffic, interaction events, viewing behavior, and more with no gaps in their data. Our solution proved to be flexible and agile as clients had custom analytics requests, including ease of installation and full compatibility with any 3rd party services or partners.",
        technologies : [
            "HTML", "Data Layer", "JavaScript", "RequireJS", "jQuery", "Lodash", "Google Tag Manager", "Google Analytics", "Event Tracking"
        ],
        imagePath: '/assets/photos/stadium-unsplash.jpg',
        imageAlt: 'Baseball Stadium'
    },
    {
        id : 3,
        title : "Project: Site Performance Audits",
        summary: "",
        background: "background 3",
        challenge : "challenge 3",
        approach : "approach 3",
        impact : "impact 3",
        technologies : [
            "HTML", "Data Layer", "JavaScript", "RequireJS", "jQuery", "Lodash", "Google Tag Manager", "Google Analytics", "Event Tracking"
        ],
        imagePath: '/assets/photos/peaks-unsplash.jpg',
        imageAlt: 'Geometric buildings resembling mountain peaks.'
    }
]