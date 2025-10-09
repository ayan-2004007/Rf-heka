export const db = {
    hospitals: {
        Kolkata: [
            {
                name: "Apollo Gleneagles Hospital",
                address: "58 Canal Circular Rd, Kadapara, Kolkata",
                phone: "+91 33 2320 3040",
                services: ["Emergency", "ICU", "Cardiology", "Neurology"],
                rating: 4.6,
                reviews: 2450,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=Apollo",
            },
            {
                name: "AMRI Hospital",
                address: "JC-16 & 17, Salt Lake City, Kolkata",
                phone: "+91 33 6606 3800",
                services: ["Surgery", "Orthopedics", "Oncology"],
                rating: 4.4,
                reviews: 1900,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=AMRI",
            },
            {
                name: "Fortis Hospital",
                address: "19, Canal Circular Rd, Kolkata",
                phone: "+91 33 2222 3333",
                services: ["Cardiology", "Orthopedics", "Neurology", "ICU"],
                rating: 4.5,
                reviews: 2100,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=Fortis",
            },
            {
                name: "Ruby General Hospital",
                address: "8, Southern Avenue, Kolkata",
                phone: "+91 33 4040 4040",
                services: ["Emergency", "Pediatrics", "Neurology", "ICU"],
                rating: 4.3,
                reviews: 1700,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=Ruby",
            },
            {
                name: "Belle Vue Clinic",
                address: "5, Park Street, Kolkata",
                phone: "+91 33 2222 1111",
                services: ["General Medicine", "Orthopedics", "ICU"],
                rating: 4.2,
                reviews: 1200,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=BelleVue",
            },
        ],
        Delhi: [
            {
                name: "AIIMS Delhi",
                address: "Ansari Nagar, New Delhi",
                phone: "+91 11 2658 8500",
                services: ["Emergency", "General OPD", "Specialties"],
                rating: 4.7,
                reviews: 5000,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=AIIMS",
            },
            {
                name: "Fortis Hospital, Vasant Kunj",
                address: "Sector B, Vasant Kunj, New Delhi",
                phone: "+91 11 4919 9999",
                services: ["Cardiology", "ICU", "Oncology", "Surgery"],
                rating: 4.5,
                reviews: 3200,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=Fortis",
            },
            {
                name: "Max Super Speciality Hospital",
                address: "1, 2nd Floor, Saket, New Delhi",
                phone: "+91 11 2653 0000",
                services: ["Emergency", "Pediatrics", "ICU", "Neurology"],
                rating: 4.6,
                reviews: 4100,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=Max",
            },
            {
                name: "BLK Super Speciality Hospital",
                address: "Pusa Rd, New Delhi",
                phone: "+91 11 6656 5656",
                services: ["Cardiology", "Oncology", "ICU"],
                rating: 4.4,
                reviews: 2800,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=BLK",
            },
            {
                name: "Sir Ganga Ram Hospital",
                address: "Rajinder Nagar, New Delhi",
                phone: "+91 11 2575 4471",
                services: ["Emergency", "Orthopedics", "Neurology", "ICU"],
                rating: 4.5,
                reviews: 3500,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=GangaRam",
            },
        ],
        Mumbai: [
            {
                name: "Lilavati Hospital",
                address: "A-791, Bandra Reclamation, Mumbai",
                phone: "+91 22 2656 8000",
                services: ["Cardiology", "ICU", "Pediatrics"],
                rating: 4.5,
                reviews: 2200,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=Lilavati",
            },
            {
                name: "Breast Cancer Hospital Mumbai",
                address: "Khar West, Mumbai",
                phone: "+91 22 2785 0000",
                services: ["Oncology", "Surgery", "Radiology"],
                rating: 4.4,
                reviews: 1800,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=Breast+Cancer+Hospital",
            },
            {
                name: "Kokilaben Dhirubhai Ambani Hospital",
                address: "Four Bungalows, Andheri West, Mumbai",
                phone: "+91 22 3099 9999",
                services: ["Cardiology", "ICU", "Neurology", "Pediatrics"],
                rating: 4.6,
                reviews: 3500,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=Kokilaben",
            },
            {
                name: "Hinduja Hospital",
                address: "Mahim, Mumbai",
                phone: "+91 22 2444 3333",
                services: ["Cardiology", "Orthopedics", "ICU"],
                rating: 4.3,
                reviews: 2000,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=Hinduja",
            },
            {
                name: "Bombay Hospital",
                address: "Marine Lines, Mumbai",
                phone: "+91 22 2202 5000",
                services: ["Emergency", "Surgery", "Pediatrics", "Neurology"],
                rating: 4.4,
                reviews: 2300,
                hours: "24/7",
                image: "https://via.placeholder.com/80x80?text=Bombay",
            },
        ],
    },

    hotels: {
        Kolkata: [
            { name: "The Oberoi Grand", address: "15 Jawaharlal Nehru Rd, Kolkata", phone: "+91 33 2229 9999", rating: "5", amenities: ["Free WiFi", "Spa", "Pool", "Restaurant"], hours: "Check-in: 12 PM", image: "https://via.placeholder.com/80x80?text=Oberoi" },
            { name: "ITC Sonar", address: "JBS Haldane Ave, Kolkata", phone: "+91 33 6623 1234", rating: "4", amenities: ["Gym", "Pool", "Restaurant", "Bar"], hours: "Check-in: 2 PM", image: "https://via.placeholder.com/80x80?text=ITC+Sonar" },
            { name: "Hyatt Regency", address: "Biswa Bangla Sarani, Kolkata", phone: "+91 33 6625 4321", rating: "4", amenities: ["Pool", "Restaurant", "Gym"], hours: "Check-in: 1 PM", image: "https://via.placeholder.com/80x80?text=Hyatt" },
            { name: "Novotel Kolkata", address: "AJC Bose Rd, Kolkata", phone: "+91 33 6600 7788", rating: "3", amenities: ["Free WiFi", "Restaurant", "Bar"], hours: "Check-in: 12 PM", image: "https://via.placeholder.com/80x80?text=Novotel" }
        ],
        Delhi: [
            { name: "The Leela Palace", address: "Diplomatic Enclave, New Delhi", phone: "+91 11 3933 1234", rating: "5", amenities: ["Spa", "Pool", "Fine Dining"], hours: "Check-in: 2 PM", image: "https://via.placeholder.com/80x80?text=Leela" },
            { name: "ITC Maurya", address: "Sardar Patel Marg, New Delhi", phone: "+91 11 2611 2233", rating: "4", amenities: ["Restaurant", "Pool", "Gym"], hours: "Check-in: 1 PM", image: "https://via.placeholder.com/80x80?text=ITC+Maurya" },
            { name: "The Lodhi", address: "Lodhi Road, New Delhi", phone: "+91 11 4366 1234", rating: "4", amenities: ["Spa", "Restaurant", "Bar"], hours: "Check-in: 3 PM", image: "https://via.placeholder.com/80x80?text=Lodhi" }
        ],
        Mumbai: [
            { name: "Taj Mahal Palace", address: "Apollo Bunder, Mumbai", phone: "+91 22 6665 3366", rating: "5", amenities: ["Pool", "Restaurant", "Spa", "Gym"], hours: "Check-in: 2 PM", image: "https://via.placeholder.com/80x80?text=Taj" },
            { name: "The St. Regis", address: "Lower Parel, Mumbai", phone: "+91 22 6667 8900", rating: "4", amenities: ["Spa", "Restaurant", "Bar"], hours: "Check-in: 3 PM", image: "https://via.placeholder.com/80x80?text=StRegis" },
            { name: "JW Marriott", address: "Juhu Tara Rd, Mumbai", phone: "+91 22 6690 1122", rating: "4", amenities: ["Pool", "Gym", "Restaurant"], hours: "Check-in: 2 PM", image: "https://via.placeholder.com/80x80?text=JWMarriott" }
        ]
    },

    rooms: {
        Kolkata: [
            {
                name: "The Oberoi Grand",
                address: "15 Jawaharlal Nehru Rd, Kolkata",
                price: "12,000/night",
                type: "Deluxe Room",
                beds: 2,
                amenities: ["WiFi", "Breakfast", "Air Conditioning", "Pool Access"],
                checkIn: "2:00 PM",
                checkOut: "12:00 PM",
                reviews: 124,
                image: "https://via.placeholder.com/80x80?text=Oberoi"
            },
            {
                name: "ITC Sonar",
                address: "JBS Haldane Ave, Kolkata",
                price: "10,500/night",
                type: "Executive Suite",
                beds: 2,
                amenities: ["WiFi", "Gym", "Spa", "Breakfast Included"],
                checkIn: "3:00 PM",
                checkOut: "11:00 AM",
                reviews: 98,
                image: "https://via.placeholder.com/80x80?text=ITC+Sonar"
            },
            {
                name: "Hyatt Regency",
                address: "1B, Old Post Office St, Kolkata",
                price: "8,500/night",
                type: "Standard Room",
                beds: 1,
                amenities: ["WiFi", "Breakfast", "Parking"],
                checkIn: "1:00 PM",
                checkOut: "12:00 PM",
                reviews: 76,
                image: "https://via.placeholder.com/80x80?text=Hyatt"
            },
            {
                name: "Park Plaza",
                address: "17, Shakespeare Sarani, Kolkata",
                price: "9,200/night",
                type: "Superior Room",
                beds: 2,
                amenities: ["WiFi", "Breakfast", "Pool Access"],
                checkIn: "2:00 PM",
                checkOut: "11:00 AM",
                reviews: 89,
                image: "https://via.placeholder.com/80x80?text=Park+Plaza"
            }
        ],
        Delhi: [
            {
                name: "The Leela Palace",
                address: "Diplomatic Enclave, New Delhi",
                price: "15,000/night",
                type: "Presidential Suite",
                beds: 3,
                amenities: ["WiFi", "Spa", "Pool", "Breakfast Included"],
                checkIn: "3:00 PM",
                checkOut: "12:00 PM",
                reviews: 210,
                image: "https://via.placeholder.com/80x80?text=Leela"
            },
            {
                name: "Taj Palace",
                address: "Sardar Patel Marg, New Delhi",
                price: "14,500/night",
                type: "Luxury Room",
                beds: 2,
                amenities: ["WiFi", "Gym", "Breakfast", "Valet Parking"],
                checkIn: "2:00 PM",
                checkOut: "11:00 AM",
                reviews: 180,
                image: "https://via.placeholder.com/80x80?text=Taj"
            },
            {
                name: "ITC Maurya",
                address: "Dr. Zakir Hussain Marg, New Delhi",
                price: "13,500/night",
                type: "Executive Room",
                beds: 2,
                amenities: ["WiFi", "Spa", "Pool", "Breakfast Included"],
                checkIn: "2:00 PM",
                checkOut: "12:00 PM",
                reviews: 150,
                image: "https://via.placeholder.com/80x80?text=ITC+Maurya"
            }
        ],
        Mumbai: [
            {
                name: "Taj Mahal Palace",
                address: "Apollo Bunder, Mumbai",
                price: "18,000/night",
                type: "Royal Suite",
                beds: 3,
                amenities: ["WiFi", "Pool", "Spa", "Breakfast Included"],
                checkIn: "3:00 PM",
                checkOut: "12:00 PM",
                reviews: 250,
                image: "https://via.placeholder.com/80x80?text=Taj"
            },
            {
                name: "Trident Nariman Point",
                address: "Nariman Point, Mumbai",
                price: "13,000/night",
                type: "Deluxe Room",
                beds: 2,
                amenities: ["WiFi", "Gym", "Breakfast", "Parking"],
                checkIn: "2:00 PM",
                checkOut: "11:00 AM",
                reviews: 170,
                image: "https://via.placeholder.com/80x80?text=Trident"
            },
            {
                name: "The St. Regis",
                address: "Lower Parel, Mumbai",
                price: "16,500/night",
                type: "Luxury Suite",
                beds: 3,
                amenities: ["WiFi", "Pool", "Spa", "Valet Parking"],
                checkIn: "3:00 PM",
                checkOut: "12:00 PM",
                reviews: 200,
                image: "https://via.placeholder.com/80x80?text=St+Regis"
            }
        ]
    },

    ambulances: {
    Kolkata: [
        {
            name: "Apollo Ambulance Service",
            location: "Kolkata Central",
            phone: "+91 33 4000 1234",
            services: ["Basic Life Support", "ICU Ambulance"],
            type: "Van",
            hours: "24/7",
            status: "Available",
            responseTime: "10-15 min",
            rating: 4.8,
            image: "https://via.placeholder.com/80x80?text=Apollo"
        },
        {
            name: "City Ambulance",
            location: "Salt Lake City, Kolkata",
            phone: "+91 33 4000 5678",
            services: ["Emergency", "Neonatal Transport"],
            type: "SUV",
            hours: "24/7",
            status: "Busy",
            responseTime: "15-20 min",
            rating: 4.6,
            image: "https://via.placeholder.com/80x80?text=City"
        },
        {
            name: "Medicare Ambulance",
            location: "Park Street, Kolkata",
            phone: "+91 33 4000 9101",
            services: ["BLS", "Advanced Life Support", "Wheelchair Transport"],
            type: "Van",
            hours: "24/7",
            status: "Available",
            responseTime: "12-18 min",
            rating: 4.7,
            image: "https://via.placeholder.com/80x80?text=Medicare"
        }
    ],
    Delhi: [
        {
            name: "AIIMS Ambulance",
            location: "New Delhi",
            phone: "+91 11 2658 1234",
            services: ["Emergency", "ICU Transport"],
            type: "SUV",
            hours: "24/7",
            status: "Available",
            responseTime: "8-12 min",
            rating: 4.9,
            image: "https://via.placeholder.com/80x80?text=AIIMS"
        },
        {
            name: "Delhi Emergency Ambulance",
            location: "Connaught Place, Delhi",
            phone: "+91 11 2658 5678",
            services: ["BLS", "ALS", "Neonatal Transport"],
            type: "Van",
            hours: "24/7",
            status: "Busy",
            responseTime: "10-15 min",
            rating: 4.5,
            image: "https://via.placeholder.com/80x80?text=Delhi+Emergency"
        }
    ],
    Mumbai: [
        {
            name: "Lilavati Ambulance Service",
            location: "Bandra, Mumbai",
            phone: "+91 22 2656 1234",
            services: ["BLS", "ALS"],
            type: "Van",
            hours: "24/7",
            status: "Available",
            responseTime: "10-12 min",
            rating: 4.8,
            image: "https://via.placeholder.com/80x80?text=Lilavati"
        },
        {
            name: "Bombay Hospital Ambulance",
            location: "Marine Lines, Mumbai",
            phone: "+91 22 2656 5678",
            services: ["ICU Ambulance", "Emergency Transport", "Neonatal Transport"],
            type: "SUV",
            hours: "24/7",
            status: "Busy",
            responseTime: "15-20 min",
            rating: 4.6,
            image: "https://via.placeholder.com/80x80?text=Bombay+Hospital"
        }
    ]
},

    emergencyServices: {
    Kolkata: [
        {
            name: "City Emergency Response",
            address: "Park Street, Kolkata",
            reviews: 120,
            services: ["Fire Response", "Medical Emergency", "Accident Assistance"],
            hours: "24/7",
            status: "Available",
            phone: "+91 33 4000 5555",
            responseTime: "10-15 min",
            rating: 4.8,
            image: "https://via.placeholder.com/80x80?text=CityER"
        },
        {
            name: "Rapid Rescue Kolkata",
            address: "Salt Lake City, Kolkata",
            reviews: 95,
            services: ["Ambulance Service", "Trauma Care", "Disaster Response"],
            hours: "24/7",
            status: "Busy",
            phone: "+91 33 4000 7777",
            responseTime: "12-20 min",
            rating: 4.6,
            image: "https://via.placeholder.com/80x80?text=RapidRescue"
        },
        {
            name: "MedCare Emergency",
            address: "Ballygunge, Kolkata",
            reviews: 80,
            services: ["Fire Safety", "Medical Evacuation", "Disaster Relief"],
            hours: "24/7",
            status: "Available",
            phone: "+91 33 4000 8888",
            responseTime: "15 min",
            rating: 4.7,
            image: "https://via.placeholder.com/80x80?text=MedCare"
        }
    ],
    Delhi: [
        {
            name: "Delhi Emergency Services",
            address: "Connaught Place, New Delhi",
            reviews: 150,
            services: ["Fire Response", "Medical Assistance", "Police Support"],
            hours: "24/7",
            status: "Available",
            phone: "+91 11 2658 9999",
            responseTime: "8-12 min",
            rating: 4.9,
            image: "https://via.placeholder.com/80x80?text=DelhiER"
        },
        {
            name: "Rapid Rescue Delhi",
            address: "Saket, New Delhi",
            reviews: 130,
            services: ["Ambulance Service", "Trauma Care", "Evacuation Support"],
            hours: "24/7",
            status: "Busy",
            phone: "+91 11 2658 8888",
            responseTime: "10-15 min",
            rating: 4.7,
            image: "https://via.placeholder.com/80x80?text=RapidDelhi"
        }
    ],
    Mumbai: [
        {
            name: "Mumbai Rapid Response",
            address: "Bandra West, Mumbai",
            reviews: 130,
            services: ["Ambulance Service", "Accident Assistance", "Disaster Relief"],
            hours: "24/7",
            status: "Available",
            phone: "+91 22 2656 1111",
            responseTime: "10-12 min",
            rating: 4.8,
            image: "https://via.placeholder.com/80x80?text=MumbaiRR"
        },
        {
            name: "City Emergency Mumbai",
            address: "Andheri East, Mumbai",
            reviews: 110,
            services: ["Fire Safety", "Medical Emergencies", "Evacuation Support"],
            hours: "24/7",
            status: "Busy",
            phone: "+91 22 2656 2222",
            responseTime: "12-18 min",
            rating: 4.6,
            image: "https://via.placeholder.com/80x80?text=CityER"
        },
        {
            name: "Medicare Rapid Response",
            address: "Marine Lines, Mumbai",
            reviews: 100,
            services: ["Disaster Response", "Medical Assistance", "Accident Support"],
            hours: "24/7",
            status: "Available",
            phone: "+91 22 2656 3333",
            responseTime: "15 min",
            rating: 4.7,
            image: "https://via.placeholder.com/80x80?text=Medicare"
        }
    ]
},

    homeCareServices: {
    Kolkata: [
        {
            name: "Kolkata Personal Care",
            address: "Park Street, Kolkata",
            reviews: 80,
            services: ["Elderly Care", "Household Help", "Personal Assistance"],
            details: "Certified caregivers available 24/7",
            image: "https://via.placeholder.com/80x80?text=KolkataPC"
        },
        {
            name: "Home Health Kolkata",
            address: "Salt Lake City, Kolkata",
            reviews: 65,
            services: ["Nursing", "Physiotherapy", "Medical Help"],
            details: "Experienced nurses for in-home care",
            image: "https://via.placeholder.com/80x80?text=HomeHealth"
        },
        {
            name: "Medicare Home Care",
            address: "Ballygunge, Kolkata",
            reviews: 70,
            services: ["Elderly Care", "Medical Assistance", "Housekeeping"],
            details: "Qualified caregivers with emergency support",
            image: "https://via.placeholder.com/80x80?text=MedicareHC"
        },
        {
            name: "Rapid Home Support",
            address: "Esplanade, Kolkata",
            reviews: 60,
            services: ["Personal Assistance", "Nursing", "Household Help"],
            details: "Flexible timings and verified staff",
            image: "https://via.placeholder.com/80x80?text=RapidHC"
        }
    ],
    Delhi: [
        {
            name: "Delhi Home Care Services",
            address: "Connaught Place, New Delhi",
            reviews: 90,
            services: ["Elderly Care", "Housekeeping", "Medical Assistance"],
            details: "Trained staff with flexible timings",
            image: "https://via.placeholder.com/80x80?text=DelhiHC"
        },
        {
            name: "Max Home Care",
            address: "Saket, New Delhi",
            reviews: 75,
            services: ["Physiotherapy", "Nursing", "Personal Assistance"],
            details: "Certified professionals with verified background",
            image: "https://via.placeholder.com/80x80?text=MaxHC"
        },
        {
            name: "Rapid Care Delhi",
            address: "Dwarka, New Delhi",
            reviews: 80,
            services: ["Elderly Care", "Medical Assistance", "Household Help"],
            details: "Emergency support available 24/7",
            image: "https://via.placeholder.com/80x80?text=RapidCare"
        },
        {
            name: "SafeHands Home Care",
            address: "Janakpuri, New Delhi",
            reviews: 70,
            services: ["Personal Assistance", "Elderly Care", "Housekeeping"],
            details: "Trained caregivers for in-home support",
            image: "https://via.placeholder.com/80x80?text=SafeHands"
        }
    ],
    Mumbai: [
        {
            name: "Mumbai Care Experts",
            address: "Bandra West, Mumbai",
            reviews: 100,
            services: ["Personal Care", "Nursing", "Household Help"],
            details: "24/7 service with emergency support",
            image: "https://via.placeholder.com/80x80?text=MumbaiCare"
        },
        {
            name: "City Home Care Mumbai",
            address: "Andheri East, Mumbai",
            reviews: 75,
            services: ["Physiotherapy", "Medical Assistance", "Personal Assistance"],
            details: "Qualified staff with verified background",
            image: "https://via.placeholder.com/80x80?text=CityHC"
        },
        {
            name: "Rapid Home Care Mumbai",
            address: "Bandra East, Mumbai",
            reviews: 85,
            services: ["Elderly Care", "Housekeeping", "Personal Assistance"],
            details: "Experienced caregivers for 24/7 support",
            image: "https://via.placeholder.com/80x80?text=RapidHC"
        },
        {
            name: "Medicare Home Care Mumbai",
            address: "Chembur, Mumbai",
            reviews: 70,
            services: ["Nursing", "Medical Assistance", "Household Help"],
            details: "Certified professionals for in-home care",
            image: "https://via.placeholder.com/80x80?text=MedicareHC"
        }
    ]
}



}
export default db