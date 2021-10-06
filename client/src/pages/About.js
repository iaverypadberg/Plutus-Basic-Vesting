import React from 'react'

const About = () => {
    return (
        <div className="flex justify-left items-center bg-light-gray h-screen">
            <div className="flex flex-col justify-left w-1/2 h-1/2">
                <h2 className="ml-2 text-xl font-bold text-blue-500">
                    Important topics for a Newly aspiring Plutus developer
                </h2>
                <div>
                    <ol className="list-decimal ml-10">
                        <li>Blockchain Structure</li>
                        <li>Haskell</li>
                        <li>Plutus</li>
                        <li>Cardano-node</li>
                        <li>Troubleshooting</li>
                        <li>
                            Working with a team
                            <ul className="list-disc ml-4">
                                <li>Git</li>
                            </ul>
                        </li>
                        <li> Finding a team</li>

                    </ol>
                </div>

                <h2 className="ml-2 text-xl font-bold text-blue-500">
                    How can I learn these?
                </h2>
            </div>
        </div>
    )
}

export default About
