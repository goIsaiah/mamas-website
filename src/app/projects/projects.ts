export type Project = {
    title: string;
    description: string;
    image: string;
    links: { label: string; href: string} [];
};

export const projects: Project[] = [
    {
        title: "Tracked",
        description: "A web-based project management site I created in a team of six for EECS 4314.  A fully functional website that allows users to create accounts, projects, tasks, and join projects created by other users.  Users can also assign tasks to each other, as well as see the deadlines of all their upcoming tasks for efficient project management.",
        image: "/images/tracked.jpeg",
        links: [
            { label: "Website Link", href: "http://132.145.109.6/" },
            { label: "Github Link", href: "https://github.com/mahfoozm/Tracked" },
            { label: "Video Demo", href: "https://youtu.be/Z0fOFuj_dG0" },
        ],
    },
    {
        title: "Star Sync",
        description: "This was my ENG 4000 capstone project I made in a team of 6 for my last year of undergraduate courses.  Star Sync is a fully automated satellite-ground station scheduling system, solving complex optimization problems such as satellite visibility and exclusion cone policies.  It is also able to schedule up to 100 requests and resolve conflicting requests within 1 minute.  I helped design the scheduling algorithm, and worked on various API endpoints.",
        image: "/images/starsync.png",
        links: [
            { label: "Github Link", href: "https://github.com/Star-Sync" },
            { label: "Video Demo", href: "https://drive.google.com/file/d/1V9kzejfKJn7ZGgjFgHar1kVM1mwE3u4I/view?usp=sharing" },
        ],
    },
    {
        title: "Smart Speedometer (OBD2 Scanner)",
        description: "This was my EECS 3216 final project I made with my brother, Evan.  Our Smart Speedometer is a program that leverages the data received from an OBD2 port (which was plugged into the car), and then display it on a DE10-Lite board.  Visual Basic was used to get the Bluetooth data from the OB2 port, and Arduino/C was used to send the data to the DE10-Lite, and Verilog was used to display the data on the DE10-Lite.",
        image: "/images/obd2.png",
        links: [
            { label: "Github Link", href: "https://github.com/goIsaiah/EECS3216/tree/main/Final%20Project/OBD2%20Logger" },
            { label: "Video Demo", href: "https://youtu.be/t8RRrwd8vqU" },
        ],
    },
    {
        title: "GoBidder",
        description: "A web-based auction service I helped make in a group of 4 for EECS 4413 - E-Commerce Systems.  The frontend was made using JavaScript, and the backend was programmed using Java, GRPC, and Go.  The system gives you the option to choose between either Dutch auctions or Forward auctions.",
        image: "/images/gobidder.png",
        links: [
            { label: "Github Link", href: "https://github.com/KaranpreetRaja/GoBidder" },
        ],
    },
    {
        title: "BookMate",
        description: "A library app I made in a group for EECS 2311 - Software Development Project. This app has social media elements with the option to create your own profile, add friends, follow users, and rate and review books. Book data was found using JSON files from Google Books, and the online database was written using MySQL. The backend was written entirely in Java.",
        image: "/images/bookmate-image.png",
        links: [
            { label: "Github Link", href: "https://github.com/goIsaiah/LibraryProject" },
        ],
    },
    {
        title: "Ready, Set, Go!",
        description: "A reaction based game I made with a partner for EECS 3201 - Digital Logic Design. This game was programmed in Verilog, and used a breadboard for LEDs and a buzzer.",
        image: "/images/ready-set-go.png",
        links: [
            { label: "Github Link", href: "" },
            { label: "Video Demo", href: "https://www.youtube.com/watch?v=gTwqR-72LD8" },
        ],
    },
    {
        title: "Arduino Plant Watering Project",
        description: "A plant watering project I made for EECS 1021 - Object Oriented Programming.  This project used an Arduino board programmed using Firmata4j in order to automatically water a plant based on its soil moisture.",
        image: "/images/plant.jpg",
        links: [
            { label: "Github Link", href: "" },
            { label: "Video Demo", href: "https://www.youtube.com/watch?v=Gco_rjUpIhM" },
        ],
    },
];