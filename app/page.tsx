"use client ";
import config from "./../sanity.config";
import { NextStudio } from "next-sanity/studio";
export default function AdminPage(){
    console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);

    return <NextStudio config ={config}/>;}