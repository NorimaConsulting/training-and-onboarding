import React from 'react';
import { useParams } from 'react-router-dom';

// New Devs TODO:
// - Copy `webapp/SetupChecks/LintCheckTemplate.tsx` into `webapp/src/linterChecks/$yourName.tsx`
// - Save the file in your editor.
// - confirm it shows no errors
// - Import it here
// - hover over your name component and confirm you can also see the comments

export default function CreatedBy() {
  const params = useParams();
  return (
    <div>
      <h1>Hello {params?.displayName}</h1>
      <h4>These devs have verified their IDE is following the linter rules:</h4>
      {/* Add your component below! */}
    </div>
  );
}
