/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from 'react';


const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    downloadUrl,
}: {
    title: string;
    icon: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    otherClasses: string;
    downloadUrl?: string;
}) => {

    const downloadResume = () => {
        const fileName = downloadUrl!.split('/').pop() || 'FatimaResume.pdf';
        const Tag = document.createElement('a');
        Tag.href = downloadUrl!;
        Tag.setAttribute('download', fileName);
        document.body.appendChild(Tag);
        Tag.click();
        Tag.remove();
    }

    console.log(downloadUrl)
    return (
        <button
            className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10`}
            onClick={downloadResume}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    );
};

export default MagicButton; // Use default export for consistency
