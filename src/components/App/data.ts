import profileArmenBaldryan from "../../images/ArmenBaldryan/profile.jpg";
import profileArmenBaldryan2 from "../../images/ArmenBaldryan/1.jpg";

import araikProfile from "../../images/Araik/profile.jpg";
import araik1 from "../../images/Araik/1.jpg";

import armenVahagniProfile from "../../images/ArmenVahagni/profile.jpg";
import armenVahagni1 from "../../images/ArmenVahagni/a.jpg";

import manvelProfile from "../../images/Manvel/profile.jpg";
import manvel1 from "../../images/Manvel/1.jpg";


export interface NewDataProps {
    id: number | string; // Use string for Firestore document IDs
    title: string;
    subtitle: string;
    description: string;
    date: string | Date;
    client?: string;
    location?: string;
    architect?: string;
    area?: string;
    stage?: string;
    profileImage?: string;
    multipleImages?: string[];
    category: string;
}

export interface CategoryData {
    id: number | string;
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
    description: "Projects designed for living spaces, offering comfort, style, and functionality for modern lifestyles.",
    projects: [
        {
            id: 1,
            title: "Modern Villa",
            subtitle: "Contemporary Design with Elegant Features",
            description: "A contemporary residential villa project featuring open spaces, modern architecture, and luxurious amenities.",
            date: "2023-08-12",
            client: "Smith Family",
            location: "123 Maple Street, Springfield",
            architect: "John Doe",
            area: "3500 sq ft",
            stage: "Completed",
            profileImage: araikProfile,
            multipleImages: [araikProfile, araik1, araik1, araik1, araik1],
            category: ""
        },
        {
            id: 2,
            title: "Luxury Apartment",
            subtitle: "High-rise Living with Panoramic Views",
            description: "High-rise luxury apartment complex offering breathtaking views, premium facilities, and urban convenience.",
            date: "2022-05-18",
            client: "Green Properties",
            location: "456 Oak Avenue, Riverdale",
            architect: "Jane Smith",
            area: "5000 sq ft",
            stage: "In Progress",
            profileImage: armenVahagniProfile,
            multipleImages: [armenVahagniProfile, armenVahagni1],
            category: ""
        },
        {
            id: 3,
            title: "Eco-Friendly House",
            subtitle: "Sustainable Living with Green Technologies",
            description: "A sustainable house designed with eco-friendly materials, renewable energy systems, and a focus on environmental harmony.",
            date: "2021-11-02",
            client: "Eco Homes Inc.",
            location: "789 Pine Road, Greenfield",
            architect: "Eco Architect",
            area: "2500 sq ft",
            stage: "Planning",
            profileImage: profileArmenBaldryan,
            multipleImages: [profileArmenBaldryan, profileArmenBaldryan2],
            category: ""
        },
        {
            id: 4,
            title: "Beachfront Bungalow",
            subtitle: "Coastal Charm with Stunning Ocean Views",
            description: "A charming bungalow by the beach, offering a serene coastal lifestyle with modern comforts and breathtaking scenery.",
            date: "2020-07-15",
            client: "Coastal Living",
            location: "321 Ocean Drive, Beach City",
            architect: "Coastal Architects",
            area: "1800 sq ft",
            stage: "Completed",
            profileImage: manvelProfile,
            multipleImages: [manvelProfile, manvel1],
            category: ""
        },
    ],
};

export const commercialCategoryData: CategoryData = {
    id: 2,
    name: "commercial",
    title: "Commercial Projects",
    link: "commercial-projects",
    description: "Buildings and infrastructure for businesses.",
    projects: [
        {
            id: 5,
            title: "Tech Office Building",
            subtitle: "Innovative Workspace",
            description: "State-of-the-art office space for a tech company.",
            date: "2021-11-02",
            client: "Innovatech",
            location: "789 Silicon Blvd, San Francisco",
            architect: "Tech Architects Inc.",
            area: "10000 sq ft",
            stage: "Completed",
            profileImage: "/images/office1.jpg",
            multipleImages: ["/images/office1.jpg", "/images/office2.jpg"],
            category: ""
        },
    ],
};

export const industrialCategoryData: CategoryData = {
    id: 3,
    name: "industrial",
    title: "Industrial Projects",
    link: "industrial-projects",
    description: "Infrastructure and facilities for industries.",
    projects: [
        {
            id: 9,
            title: "Manufacturing Plant",
            subtitle: "Production Facility",
            description: "Large-scale manufacturing plant.",
            date: "2021-11-02",
            client: "Industry Leaders Inc.",
            location: "789 Factory Rd, Industrial Park",
            architect: "Industrial Design Group",
            area: "50000 sq ft",
            stage: "Completed",
            profileImage: "/images/plant1.jpg",
            multipleImages: ["/images/plant1.jpg", "/images/plant2.jpg"],
            category: ""
        },
    ],
};

export const urbanCategoryData: CategoryData = {
    id: 4,
    name: "urban",
    title: "Urban Projects",
    link: "urban-projects",
    description: "Projects focused on urban development and planning.",
    projects: [
        {
            id: 13,
            title: "City Park",
            subtitle: "Green Oasis",
            description: "A large park in the heart of the city.",
            date: "2022-03-15",
            client: "City Council",
            location: "Central Park Ave, Urban City",
            architect: "Urban Landscapes Inc.",
            area: "100 acres",
            stage: "Completed",
            profileImage: "/images/park1.jpg",
            multipleImages: ["/images/park1.jpg", "/images/park2.jpg"],
            category: ""
        },
        
    ],
};

export const reconstructionCategoryData: CategoryData = {
    id: 5,
    name: "reconstruction",
    title: "Reconstruction Projects",
    link: "reconstruction-projects",
    description: "Projects focused on rebuilding and restoring structures.",
    projects: [
        {
            id: 17,
            title: "Historic Building Restoration",
            subtitle: "Preserving Heritage",
            description: "Restoration of a historic building to its former glory.",
            date: "2021-04-10",
            client: "Heritage Society",
            location: "Old Town Square, Heritage City",
            architect: "Historic Architects Inc.",
            area: "15,000 sq ft",
            stage: "Completed",
            profileImage: "/images/historic1.jpg",
            multipleImages: ["/images/historic1.jpg", "/images/historic2.jpg"],
            category: ""
        },
        
    ],
};

export const smallCategoryData: CategoryData = {
    id: 6,
    name: "small",
    title: "Small Projects",
    link: "small-projects",
    description: "Smaller scale projects with unique designs.",
    projects: [
        {
            id: 21,
            title: "Tiny House",
            subtitle: "Compact Living",
            description: "A small, efficient, and stylish tiny house.",
            date: "2021-06-10",
            client: "Minimalist Living",
            location: "789 Cozy Lane, Smallville",
            architect: "Tiny Home Designers",
            area: "500 sq ft",
            stage: "Completed",
            profileImage: "/images/tinyhouse1.jpg",
            multipleImages: ["/images/tinyhouse1.jpg", "/images/tinyhouse2.jpg"],
            category: ""
        },
    ],
};


export const categoryDataArray = [
    residentialCategoryData,
    commercialCategoryData,
    industrialCategoryData,
    urbanCategoryData,
    reconstructionCategoryData,
    smallCategoryData,
];



