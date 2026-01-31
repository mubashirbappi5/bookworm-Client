import React from 'react';

const ActionSection = () => {
    return (
        <div className="bg-[#2f5d3f] py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Reading Journey?</h2>
                <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
                    Join thousands of readers who are tracking their progress and discovering new books with BookWorm.
                </p>
                <button className="bg-white text-[#2f5d3f] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default ActionSection;