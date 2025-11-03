
export type CityData = {
    id: string;
    name: string;
    state: string;
    country: string;
    population: number;
    zipCodes: string[];
    nearbyCities: string[];
    faqs: {
        question: string;
        answer: string;
    }[];
};

export const allCities: CityData[] = [
    {
        id: 'boise',
        name: 'Boise',
        state: 'Idaho',
        country: 'USA',
        population: 235000,
        zipCodes: ["83702", "83703", "83704", "83705", "83706"],
        nearbyCities: ['Meridian', 'Nampa', 'Caldwell'],
        faqs: [
            {
                question: 'What is the best internet provider for IPTV in Boise, Idaho?',
                answer: 'For optimal IPTV streaming in Boise, providers like CenturyLink Fiber and Sparklight offer high-speed plans that ensure a buffer-free experience. We recommend at least 50 Mbps for smooth HD/4K streaming.'
            },
            {
                question: 'Can I watch local Boise channels with this IPTV service?',
                answer: 'Yes, our IPTV service for Boise includes local channels such as KTVB (NBC), KBOI-TV (CBS), and KIVI-TV (ABC), so you can stay up-to-date with news and events in the Treasure Valley.'
            },
            {
                question: 'Are there any restrictions for using IPTV in Boise?',
                answer: 'There are no specific restrictions for using a legal IPTV service in Boise, Idaho. As long as you subscribe to a licensed provider like ours, you can stream content freely and legally.'
            },
             {
                question: 'How fast is IPTV delivery in Boise?',
                answer: 'Our IPTV service activation is instant. Once you complete your purchase, your credentials for our IPTV service in Boise are sent to your email immediately, allowing you to start watching right away.'
            }
        ]
    }
];

export function getCityData(cityId: string): CityData | undefined {
    return allCities.find(city => city.id === cityId);
}
