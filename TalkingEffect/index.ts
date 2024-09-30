/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "TalkingEffect",
    description: "When you talk, your avatar will have a talking effect.",
    authors: [{ name: "Danonep2", id: 0n }],
    interval: 0,

    main() {
        const avatarList = document.querySelectorAll(".tileSizer_a5b954");
        const avatarListOnFocus = document.querySelectorAll(".tileSizer_d737b4");
        const avatarListArray = Array.from(avatarList.length > 0 ? avatarList : avatarListOnFocus);

        if (avatarListArray.length === 0) {
            console.log("No users found");
            return;
        }

        const checkIfTalking = (user: Element) => {
            const ifTalkging: boolean = user.querySelector(".speaking_ba4b17") !== null;

            const avatarElement = user.querySelector(".avatar_c51b4e");

            if (ifTalkging) {
                avatarElement?.classList.add("talking");
                return;
            }

            avatarElement?.classList.remove("talking");
        };

        avatarListArray.forEach(user => {
            checkIfTalking(user);
        });
    },

    start() {
        console.log("TalkingEffect started");
        // @ts-ignore
        this.interval = setInterval(() => {
            this.main();
        }, 200);
    },

    stop() {
        console.log("TalkingEffect stopped");
        // @ts-ignore
        clearInterval(this.interval);
    }
});
