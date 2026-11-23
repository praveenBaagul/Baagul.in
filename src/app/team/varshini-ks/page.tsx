import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import TeamProfileCard from "@/components/team/TeamProfileCard";
import { TEAM_PROFILES, teamProfileJsonLd, teamProfileMetadata } from "@/lib/team-profiles";

const profile = TEAM_PROFILES["varshini-ks"];

export const metadata: Metadata = teamProfileMetadata(profile);

export default function VarshiniProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <JsonLd data={teamProfileJsonLd(profile)} />

      <Header />

      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-8">
        <TeamProfileCard profile={profile} />
      </main>

      <Footer />
    </div>
  );
}
