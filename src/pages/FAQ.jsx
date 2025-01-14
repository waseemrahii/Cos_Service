import React from 'react';
import Banner from '../components/Banner';
import Questions from '../sections/FAQ/Questions';
import Partners from '../sections/FAQ/Partners';

export default function FAQ() {
    const faqData = [
        {
            _id: "66d1fa734836768b40de8817",
            questionText: "What are the key phases of a typical construction project?",
            isAnswered: true,
            askedAt: "2024-08-30T16:59:31.771Z",
            answerText: "A typical construction project involves several key phases. First, in the Planning and Design phase, the project concept is developed, designs are created, and permits are obtained. Next, the Pre-Construction phase focuses on finalising contracts, scheduling, and preparing resources. The Construction phase involves the actual building work, including site preparation, foundation laying, and installation of systems. After construction, the Post-Construction phase includes final inspections and addressing any issues. Finally, Maintenance ensures the building remains functional and in good condition over time.",
            answeredAt: "2024-08-30T17:01:18.420Z"
        },
        {
            _id: "66d1f9434836768b40de8814",
            questionText: "How can you obtain a link to a YouTube comment?",
            isAnswered: true,
            askedAt: "2024-08-30T16:54:27.826Z",
            answerText: "To generate a direct link to a YouTube comment, you need to first go to the video containing the comment. Scroll down to the comments section and find the specific comment you want to share. Next, click on the timestamp next to the commenter’s name (like 1 week ago). Clicking the timestamp will reload the page, and the URL in your browser’s address bar will update to include a unique reference to that particular comment. You can then copy this updated URL to share a direct link to the specific comment.",
            answeredAt: "2024-08-30T16:56:57.538Z"
        },
        {
            _id: "66d1f8e14836768b40de8811",
            questionText: "What does Gradual Release mean??",
            isAnswered: true,
            askedAt: "2024-08-30T16:52:49.661Z",
            answerText: "Gradual Release, often referred to as Drip Feed, is a strategy where content, resources, or products are released incrementally over a period of time rather than all at once. This method is commonly used in marketing, online courses, or subscription services to maintain user engagement, create anticipation, and manage content delivery in a controlled, step-by-step manner.",
            answeredAt: "2024-08-30T16:53:28.551Z"
        },
        {
            _id: "66d1f78ebead3e52eb3825d9",
            questionText: "What does the term In Progress status signify?",
            isAnswered: true,
            askedAt: "2024-08-30T16:47:10.035Z",
            answerText: "In Progress status signifies that a task or process has started but is not yet fully finished. It indicates that some parts of the work have been completed, while other parts still require attention to reach full completion. This status shows that further action is needed to conclude the process entirely.",
            answeredAt: "2024-08-30T16:49:16.850Z"
        }
    ];

    const partnersLogos = [
        { src: 'path-to-logo1.png', alt: 'Partner 1 Logo' },
        { src: 'path-to-logo2.png', alt: 'Partner 2 Logo' },
        { src: 'path-to-logo3.png', alt: 'Partner 3 Logo' },
        { src: 'path-to-logo4.png', alt: 'Partner 4 Logo' },
    ];

    return (
        <>
            <Banner />
            <Questions faqData={faqData} />
            <Partners partnersLogos={partnersLogos} />
        </>
    );
}
