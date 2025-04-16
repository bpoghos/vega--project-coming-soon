import profileArmenBaldryan from "../../images/ArmenBaldryan/profile.jpg";




export interface NewDataProps {
    id: number;
    title: string;
    description: string;
    date: string;
    client: string;
    address: string;
    profile: string;
    images: string[];
}

export interface CategoryData {
    id: number;
    name: string;
    title: string;
    link: string;
    description?: string;
    projects: NewDataProps[];
}




export const residentialCategoryData: CategoryData = {
    id: 1,
    name: "residential",
    title: "Residential Projects",
    link: "residential-projects",
    description: "Projects designed for living spaces.",
    projects: [
        {
            id: 1,
            title: "Modern Villa",
            description: "A contemporary residential villa project.",
            date: "2023-08-12",
            client: "Smith Family",
            address: "123 Maple Street, Springfield",
            profile: "residential",
            images: ["../../images/Araik/profile.jpg", "../../images/Araik/1.jpg"],
        },
        {
            id: 2,
            title: "Luxury Apartment",
            description: "High-rise luxury apartment complex.",
            date: "2022-05-18",
            client: "Green Properties",
            address: "456 Oak Avenue, Riverdale",
            profile: "residential",
            images: ["/images/apartment1.jpg", "/images/apartment2.jpg"],
        },
        {
            id: 3,
            title: "Eco-Friendly House",
            description: "Sustainable house with green technologies.",
            date: "2021-11-02",
            client: "Eco Homes Inc.",
            address: "789 Pine Road, Greenfield",
            profile: "residential",
            images: ["/images/eco1.jpg", "/images/eco2.jpg"],
        },
        {
            id: 4,
            title: "Beachfront Bungalow",
            description: "Charming bungalow by the beach.",
            date: "2020-07-15",
            client: "Coastal Living",
            address: "321 Ocean Drive, Beach City",
            profile: "residential",
            images: [profileArmenBaldryan, "/images/bungalow2.jpg"],
        },
    ]
};

export const commercialCategoryData: CategoryData = {
    id: 2,
    name: "commercial",
    title: "Commercial Projects",
    link: "commercial-projects",
    description: "Buildings and infrastructure for businesses.",
    projects: [
        {
            id: 3,
            title: "Tech Office Building",
            description: "State-of-the-art office space for a tech company.",
            date: "2021-11-02",
            client: "Innovatech",
            address: "789 Silicon Blvd, San Francisco",
            profile: "commercial",
            images: ["/images/office1.jpg", "/images/office2.jpg"],
        },
        {
            id: 4,
            title: "Shopping Mall",
            description: "Large shopping complex with various stores.",
            date: "2020-07-15",
            client: "City Mall Group",
            address: "321 Commerce St, Metropolis",
            profile: "commercial",
            images: ["/images/mall1.jpg", "/images/mall2.jpg"],
        },
        {
            id: 5,
            title: "Restaurant Design",
            description: "Modern restaurant interior and exterior design.",
            date: "2019-03-22",
            client: "Gourmet Eats",
            address: "654 Culinary Ave, Food City",
            profile: "commercial",
            images: ["/images/restaurant1.jpg", "/images/restaurant2.jpg"],
        },
        {
            id: 6,
            title: "Hotel Renovation",
            description: "Renovation of a historic hotel.",
            date: "2018-12-10",
            client: "Heritage Hotels",
            address: "987 Heritage Way, Oldtown",
            profile: "commercial",
            images: ["/images/hotel1.jpg", "/images/hotel2.jpg"],
        },
    ]
};

export const industrialCategoryData: CategoryData = {
    id: 3,
    name: "industrial",
    title: "Industrial Projects",
    link: "industrial-projects",
    description: "Designs for factories and warehouses.",
    projects: [
        {
            id: 7,
            title: "Manufacturing Plant",
            description: "Large-scale manufacturing facility.",
            date: "2022-05-18",
            client: "Global Manufacturing Corp.",
            address: "456 Factory Lane, Industry City",
            profile: "industrial",
            images: ["/images/plant1.jpg", "/images/plant2.jpg"],
        },
        {
            id: 8,
            title: "Warehouse Complex",
            description: "Spacious warehouse for logistics.",
            date: "2021-11-02",
            client: "Logistics Solutions",
            address: "789 Storage Rd, Cargo Town",
            profile: "industrial",
            images: ["/images/warehouse1.jpg", "/images/warehouse2.jpg"],
        },
        {
            id: 9,
            title: "Power Plant Design",
            description: "Design for a renewable energy power plant.",
            date: "2020-07-15",
            client: "Green Energy Inc.",
            address: "321 Energy St, Power City",
            profile: "industrial",
            images: ["/images/powerplant1.jpg", "/images/powerplant2.jpg"],
        },
        {
            id: 10,
            title: "Distribution Center",
            description: "Modern distribution center for e-commerce.",
            date: "2019-03-22",
            client: "E-Shop Logistics",
            address: "654 Delivery Ave, E-Town",
            profile: "industrial",
            images: ["/images/distribution1.jpg", "/images/distribution2.jpg"],
        },
    ]
};


export const urbanCategoryData: CategoryData = {
    id: 4,
    name: "urban",
    title: "Urban Development Projects",
    link: "urban-development-projects",
    description: "Projects focused on urban planning and development.",
    projects: [
        {
            id: 11,
            title: "City Park Design",
            description: "Design for a new city park.",
            date: "2023-08-12",
            client: "City Council",
            address: "123 Greenway, Urban City",
            profile: "urban",
            images: ["/images/park1.jpg", "/images/park2.jpg"],
        },
        {
            id: 12,
            title: "Public Transportation Hub",
            description: "Design for a public transportation hub.",
            date: "2022-05-18",
            client: "Transit Authority",
            address: "456 Transit Blvd, Metro City",
            profile: "urban",
            images: ["/images/hub1.jpg", "/images/hub2.jpg"],
        },
        {
            id: 13,
            title: "Community Center",
            description: "Design for a community center.",
            date: "2021-11-02",
            client: "Neighborhood Association",
            address: "789 Community St, Local Town",
            profile: "urban",
            images: ["/images/community1.jpg", "/images/community2.jpg"],
        },
        {
            id: 14,
            title: "Urban Redevelopment Project",
            description: "Redevelopment of an urban area.",
            date: "2020-07-15",
            client: "Urban Renewal Agency",
            address: "321 Renewal Ave, Oldtown",
            profile: "urban",
            images: ["/images/redevelopment1.jpg", "/images/redevelopment2.jpg"],
        },
    ]
};
export const reconstructionCategoryData: CategoryData = {
    id: 5,
    name: "reconstruction",
    title: "Reconstruction Projects",
    link: "reconstruction-projects",
    description: "Projects focused on rebuilding and renovation.",
    projects: [
        {
            id: 15,
            title: "Historic Building Restoration",
            description: "Restoration of a historic building.",
            date: "2023-08-12",
            client: "Heritage Society",
            address: "123 History Lane, Oldtown",
            profile: "reconstruction",
            images: ["/images/restoration1.jpg", "/images/restoration2.jpg"],
        },
        {
            id: 16,
            title: "Bridge Reconstruction",
            description: "Reconstruction of a city bridge.",
            date: "2022-05-18",
            client: "City Engineering Dept.",
            address: "456 Bridge St, River City",
            profile: "reconstruction",
            images: ["/images/bridge1.jpg", "/images/bridge2.jpg"],
        },
        {
            id: 17,
            title: "School Renovation",
            description: "Renovation of a local school.",
            date: "2021-11-02",
            client: "School District",
            address: "789 Education Ave, Learning Town",
            profile: "reconstruction",
            images: ["/images/school1.jpg", "/images/school2.jpg"],
        },
        {
            id: 18,
            title: "Factory Renovation",
            description: "Renovation of an old factory.",
            date: "2020-07-15",
            client: "Industrial Revamp Inc.",
            address: "321 Factory Rd, Industry City",
            profile: "reconstruction",
            images: ["/images/factory1.jpg", "/images/factory2.jpg"],
        },
    ]
};
export const smallCategoryData: CategoryData = {
    id: 6,
    name: "small",
    title: "Small Architectural Forms",
    link: "small-architectural-forms",
    description: "Designs for small structures and installations.",
    projects: [
        {
            id: 19,
            title: "Garden Pavilion",
            description: "Design for a garden pavilion.",
            date: "2023-08-12",
            client: "Homeowner",
            address: "123 Garden St, Green City",
            profile: "small",
            images: ["/images/pavilion1.jpg", "/images/pavilion2.jpg"],
        },
        {
            id: 20,
            title: "Sculpture Installation",
            description: "Design for a public sculpture.",
            date: "2022-05-18",
            client: "Art Council",
            address: "456 Art Ave, Culture City",
            profile: "small",
            images: ["/images/sculpture1.jpg", "/images/sculpture2.jpg"],
        },
        {
            id: 21,
            title: "Bus Stop Shelter",
            description: "Design for a bus stop shelter.",
            date: "2021-11-02",
            client: "Transit Authority",
            address: "789 Transit Blvd, Metro City",
            profile: "small",
            images: ["/images/busstop1.jpg", "/images/busstop2.jpg"],
        },
        {
            id: 22,
            title: "Public Restroom Design",
            description: "Design for a public restroom facility.",
            date: "2020-07-15",
            client: "City Council",
            address: "321 Clean St, Urban City",
            profile: "small",
            images: ["/images/restroom1.jpg", "/images/restroom2.jpg"],
        },
    ]
};

export const categoryDataArray = [
    residentialCategoryData,
    commercialCategoryData,
    industrialCategoryData,
    urbanCategoryData,
    reconstructionCategoryData,
    smallCategoryData,
];



