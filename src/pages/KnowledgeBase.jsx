import React from 'react'
import Banner from '../components/Banner'
import Knowledge from '../sections/KnowledgeBase/Knowledge'
import { KnowledgeBaseData } from '../utils/KnowledgeBaseData';

export default function KnowledgeBase() {
    const { knowledgeItems } = KnowledgeBaseData;

    return (
        <>
            <Banner />
            <Knowledge knowledgeItems={knowledgeItems} />
        </>
    );
}