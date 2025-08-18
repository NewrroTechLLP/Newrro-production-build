"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
    return (
        <section className="bg-muted py-20 text-center md:py-32">
            <div className="container mx-auto px-4">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-bold text-foreground md:text-5xl">Ready to Transform Your Robotics Program?</h2>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button size="lg">Get in Touch</Button>
                        <Button size="lg" variant="outline">Schedule a Demo</Button>
                    </div>
                 </motion.div>
            </div>
        </section>
    );
}