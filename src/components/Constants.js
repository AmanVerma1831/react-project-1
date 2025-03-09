/*
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */

export const IMG_CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const restaurantList = [
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "73011",
            name: "KFC",
            uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
            city: "22",
            area: "Anand Vihar Colony",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
            cuisines: ["American", "Snacks", "Biryani"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 31,
            maxDeliveryTime: 31,
            slaString: "31 MINS",
            lastMileTravel: 6.199999809265137,
            slugs: {
                restaurant: "kfc-chukkuwala-chukkuwala",
                city: "dehradun",
            },
            cityState: "22",
            address:
                "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
            locality: "Clock Tower",
            parentId: 547,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "6.1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "73011",
                deliveryTime: 31,
                minDeliveryTime: 31,
                maxDeliveryTime: 31,
                lastMileTravel: 6.199999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.0",
            totalRatings: 5000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "542132",
            name: "Domnik Pizza",
            uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
            city: "22",
            area: "Majra    Bansal Home",
            totalRatingsString: "50+ ratings",
            cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
            cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 33,
            minDeliveryTime: 33,
            maxDeliveryTime: 33,
            slaString: "33 MINS",
            lastMileTravel: 0.6000000238418579,
            slugs: {
                restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
                city: "dehradun",
            },
            cityState: "22",
            address:
                "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
            locality: "Patel Nagar",
            parentId: 22321,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "0.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "542132",
                deliveryTime: 33,
                minDeliveryTime: 33,
                maxDeliveryTime: 33,
                lastMileTravel: 0.6000000238418579,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.8",
            totalRatings: 50,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "321517",
            name: "FOOD PLANET RESTAURANT",
            uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
            city: "22",
            area: "Majra",
            totalRatingsString: "50+ ratings",
            cloudinaryImageId: "ykboewqeoxnne8fgrnui",
            cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 0.699999988079071,
            slugs: {
                restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
                city: "dehradun",
            },
            cityState: "22",
            address:
                "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
            locality: "Patel Nagar",
            parentId: 81850,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "0.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "321517",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                lastMileTravel: 0.699999988079071,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "2.8",
            totalRatings: 50,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "311806",
            name: "Burger King",
            uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
            city: "22",
            area: "Anand Vihar Colony",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
            cuisines: ["Burgers", "American"],
            tags: [],
            costForTwo: 35000,
            costForTwoString: "₹350 FOR TWO",
            deliveryTime: 39,
            minDeliveryTime: 39,
            maxDeliveryTime: 39,
            slaString: "39 MINS",
            lastMileTravel: 6.300000190734863,
            slugs: {
                restaurant: "burger-king-chakrata-road-ballupur",
                city: "dehradun",
            },
            cityState: "22",
            address:
                "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
            locality: "CHAKRATA ROAD",
            parentId: 166,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use STEALDEAL",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code STEALDEAL",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use STEALDEAL",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code STEALDEAL",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "6.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "311806",
                deliveryTime: 39,
                minDeliveryTime: 39,
                maxDeliveryTime: 39,
                lastMileTravel: 6.300000190734863,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.2",
            totalRatings: 5000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "132460",
            name: "Annapurna Andhra Mess",
            uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
            city: "22",
            area: "Dehradun",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
            cuisines: ["South Indian", "Biryani", "North Indian"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 1.399999976158142,
            slugs: {
                restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
                city: "dehradun",
            },
            cityState: "22",
            address:
                "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
            locality: "Patel Nagar",
            parentId: 33997,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "1.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "132460",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                lastMileTravel: 1.399999976158142,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "496677",
            name: "Uncle Ji Restaurant",
            uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
            city: "22",
            area: "Patel Nagar",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
            cuisines: ["North Indian", "Snacks", "Beverages"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 31,
            maxDeliveryTime: 31,
            slaString: "31 MINS",
            lastMileTravel: 0.800000011920929,
            slugs: {
                restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
                city: "dehradun",
            },
            cityState: "22",
            address: "348 santosh tower, majra road gram majra dehradun 248001",
            locality: "Patel Nagar",
            parentId: 298209,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "0.8 kms",
            hasSurge: false,
            sla: {
                restaurantId: "496677",
                deliveryTime: 31,
                minDeliveryTime: 31,
                maxDeliveryTime: 31,
                lastMileTravel: 0.800000011920929,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "--",
            totalRatings: 0,
            new: false,
        },
        subtype: "basic",
    },
];

export const restaurantData = [
    {
        type: "restaurant",
        data: {
            "resId": 801146,
            "name": "Madhurima Veg",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/6/801146/7bfb5cc9f1c8171d78267a5d58830b87_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/6/801146/7bfb5cc9f1c8171d78267a5d58830b87_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "50.8K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "911",
                        "reviewTextSmall": "911 Reviews",
                        "subtext": "911 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "49.9K",
                        "reviewTextSmall": "49.9K Reviews",
                        "subtext": "49.9K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹900 for two"
            },
            "cfo": {
                "text": "₹400 for one"
            },
            "locality": {
                "name": "Gomti Nagar, Lucknow",
                "address": "2, Vibhuti Khand, Railway Station Road, Gomti Nagar, Lucknow",
                "localityUrl": "lucknow/gomti-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/shake/",
                    "name": "Shake"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹400 for one"
            }
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            "resId": 800466,
            "name": "Sharma Ji Ki Chai",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/800466/a2238c3f56a4b0295ae1c1405a00c10d_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/800466/a2238c3f56a4b0295ae1c1405a00c10d_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.4",
                "rating_text": "4.4",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "22.4K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "22.4K",
                        "reviewTextSmall": "22.4K Reviews",
                        "subtext": "22.4K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹100 for two"
            },
            "cfo": {
                "text": "₹40 for one"
            },
            "locality": {
                "name": "Lalbagh, Lucknow",
                "address": "46/33, Opposite Darul Shafa, TN Road, Lalbagh, Lucknow",
                "localityUrl": "lucknow/lalbagh-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/tea/",
                    "name": "Tea"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹40 for one"
            }
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            "resId": 19177819,
            "name": "Pizza Cafe Day",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/19177819/9fa8b480ffb9a06f079f177506fe9f46_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/9/19177819/9fa8b480ffb9a06f079f177506fe9f46_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.6",
                "rating_text": "3.6",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "41.3K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.7",
                        "reviewCount": "193",
                        "reviewTextSmall": "193 Reviews",
                        "subtext": "193 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.7",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.5",
                        "reviewCount": "41.1K",
                        "reviewTextSmall": "41.1K Reviews",
                        "subtext": "41.1K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹350 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Nirala Nagar, Lucknow",
                "address": "Laxmi Complex, Babu Ganj, Daliganj, Opposite Allahbad Bank, Nirala Nagar, Lucknow",
                "localityUrl": "lucknow/nirala-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            "resId": 18792010,
            "name": "Sharma Chai",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/0/18792010/1a82bec3a326018781eff6328e7c58a2_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/0/18792010/1a82bec3a326018781eff6328e7c58a2_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "60.1K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "60.1K",
                        "reviewTextSmall": "60.1K Reviews",
                        "subtext": "60.1K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹100 for two"
            },
            "cfo": {
                "text": "₹40 for one"
            },
            "locality": {
                "name": "Lalbagh, Lucknow",
                "address": "6/A, Balmiki Marg Lalbagh, Near Old L.D.A Office, Kaiserbagh Office Colony, Lalbagh, Lucknow",
                "localityUrl": "lucknow/lalbagh-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/tea/",
                    "name": "Tea"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/north-indian/",
                    "name": "North Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹40 for one"
            }
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            "resId": 18736247,
            "name": "The Oven",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/7/18736247/bdb7a52c3e1d9ed8a2c158728d6bec35_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/7/18736247/bdb7a52c3e1d9ed8a2c158728d6bec35_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "15K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "504",
                        "reviewTextSmall": "504 Reviews",
                        "subtext": "504 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "14.5K",
                        "reviewTextSmall": "14.5K Reviews",
                        "subtext": "14.5K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹350 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Nirala Nagar, Lucknow",
                "address": "1, Lower Ground, Iradat Nagar, Sitapur Road, Nirala Nagar, Lucknow",
                "localityUrl": "lucknow/nirala-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/pasta/",
                    "name": "Pasta"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/italian/",
                    "name": "Italian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            "resId": 18796349,
            "name": "Ajay Khaste",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/18796349/b46919cf5c1038de67dc5fada1e61408_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/9/18796349/b46919cf5c1038de67dc5fada1e61408_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "14.3K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "14.3K",
                        "reviewTextSmall": "14.3K Reviews",
                        "subtext": "14.3K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹200 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Husain Ganj, Lucknow",
                "address": "Shop 4, Husain Ganj, Lucknow",
                "localityUrl": "lucknow/husain-ganj-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/mithai/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/street-food/",
                    "name": "Street Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            "resId": 19270356,
            "name": "Burger King",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19270356/cc8f83eb4e1cb9421c88bfb16fb7a82e_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19270356/cc8f83eb4e1cb9421c88bfb16fb7a82e_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "22.7K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "526",
                        "reviewTextSmall": "526 Reviews",
                        "subtext": "526 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "22.2K",
                        "reviewTextSmall": "22.2K Reviews",
                        "subtext": "22.2K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹350 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Hazratganj, Lucknow",
                "address": "Ground Floor, Sahu The Theatre Building, Hazratganj, Lucknow",
                "localityUrl": "lucknow/hazratganj-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/burger/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            "resId": 20630438,
            "name": "Shri Balaji Dhaba",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/6/800496/929efd00855e6cb1570141cbc437e3fb_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/6/800496/929efd00855e6cb1570141cbc437e3fb_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "8,199",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.5",
                        "reviewCount": "45",
                        "reviewTextSmall": "45 Reviews",
                        "subtext": "45 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.5",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "8,154",
                        "reviewTextSmall": "8,154 Reviews",
                        "subtext": "8,154 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹200 for one"
            },
            "locality": {
                "name": "Aliganj, Lucknow",
                "address": "B-2/363, Lower Ground Floor, Opposite Engineering College, Aliganj, Lucknow",
                "localityUrl": "lucknow/aliganj-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/chinese/",
                    "name": "Chinese"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for one"
            }
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            "resId": 18970077,
            "name": "The Hazelnut Factory",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/7/18970077/7ea57a5ee0c4c7f28fdfa12a31ec4e3e_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/7/18970077/7ea57a5ee0c4c7f28fdfa12a31ec4e3e_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "30.3K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "799",
                        "reviewTextSmall": "799 Reviews",
                        "subtext": "799 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "29.5K",
                        "reviewTextSmall": "29.5K Reviews",
                        "subtext": "29.5K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,000 for two"
            },
            "cfo": {
                "text": "₹400 for one"
            },
            "locality": {
                "name": "Nirala Nagar, Lucknow",
                "address": "B-192, Rama Krishna Math, Nirala Nagar, Lucknow",
                "localityUrl": "lucknow/nirala-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/bakery/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/mithai/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/cafes/",
                    "name": "Cafe"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/street-food/",
                    "name": "Street Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹400 for one"
            }
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            "resId": 800074,
            "name": "Chhappan Bhog",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/4/800074/163bd0caf86523af5ff9c86616079dc6_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/4/800074/163bd0caf86523af5ff9c86616079dc6_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "9,007",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "9,007",
                        "reviewTextSmall": "9,007 Reviews",
                        "subtext": "9,007 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹350 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Sadar Bazaar, Lucknow",
                "address": "311-312, P D Road, Sadar Bazaar, Lucknow",
                "localityUrl": "lucknow/sadar-bazaar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/mithai/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/street-food/",
                    "name": "Street Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            "resId": 19941156,
            "name": "Mr. Brown - Danbro",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19941156/4c5dc384a421d5eb7da77c1686f0b9ad_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19941156/4c5dc384a421d5eb7da77c1686f0b9ad_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "2,236",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "2,236",
                        "reviewTextSmall": "2,236 Reviews",
                        "subtext": "2,236 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹200 for one"
            },
            "locality": {
                "name": "Nirala Nagar, Lucknow",
                "address": "Shop 03/V, V/01, Vishwavidyalya Metro Station, Nirala Nagar, Lucknow",
                "localityUrl": "lucknow/nirala-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/bakery/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/coffee/",
                    "name": "Coffee"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/burger/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/lucknow/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for one"
            }
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            "resId": 19535116,
            "name": "Pawan Sweet & Bhojnalay",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19535116/ec6f7b17559d4963b86553680e8dd0c5_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19535116/ec6f7b17559d4963b86553680e8dd0c5_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "9,568",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.2",
                        "reviewCount": "20",
                        "reviewTextSmall": "20 Reviews",
                        "subtext": "20 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "yellow",
                            "tint": "400"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "9,548",
                        "reviewTextSmall": "9,548 Reviews",
                        "subtext": "9,548 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Indira Nagar, Lucknow",
                "address": "Surendar Nagar, Kamta, Indira Nagar, Lucknow",
                "localityUrl": "lucknow/indira-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/mithai/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/lucknow/restaurants/chinese/",
                    "name": "Chinese"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        subtype: "basic",
    }
];
