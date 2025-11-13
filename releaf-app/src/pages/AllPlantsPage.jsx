import { useState, useEffect } from "react";
import MasonryGallery from "../components/MasonryGallery";

export default function AllPlantsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MasonryGallery />
    </div>
  );
}
