import React from "react";
import OpenAI from 'react';

const openai = new OpenAI

export default function MatrixGen() {

    const response = await openai.responses.create({
        model: "gpt-4o-latest",
        input [
            

        ]
    })

}

