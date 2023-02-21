

export type Feature = {
    id: string;
    icon: string;
    title: string;
    description: string;
    color: 'light' | 'dark';
}

export const features: Feature[] = [
    {   
        id: '1',
        icon: 'MetricsIcon',
        title: 'Event Metrics',
        description: 'Track your ticket sales, attendees count and more with much ease.',
        color: 'light',
    },
    {
        id: '2',
        icon: 'RegistrationIcon',
        title: 'Registration & Ticketing',
        description: 'Manage your Event registrations and ticket sales easier and receive payments instantly.',
        color: 'dark',
    },
    {
        id: '3',
        icon: 'BrandedIcon',
        title: 'Branded Badges',
        description: 'Create your custom branded badges for your events and get them printed.',
        color: 'light',
    },
    {
        id: '4',
        icon: 'AppIcon',
        title: 'Oragniser App',
        description: 'Manage your events at the palm of your hand with our Oragniser App.',
        color: 'dark',
    },
    {
        id: '5',
        icon: 'EngagementIcon',
        title: 'Attendee Engagement',
        description: 'Engage with your attendees via email, surveys and much more.',
        color: 'light',
    },
    {
        id: '6',
        icon: 'CalendarIcon',
        title: 'Add to Calendar',
        description: 'Effortless way to add your events to registered users calendars by 1-click.',
        color: 'dark',
    },
];