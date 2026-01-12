---
name: hubspot-integration
description: Integrate HubSpot forms and CRM features into CliqRise. Use when adding lead capture forms, embedding HubSpot forms in React/Vite apps, or connecting to HubSpot CRM.
---

# HubSpot Integration for CliqRise

## Account Details

| Setting | Value |
|---------|-------|
| Portal ID | `244830201` |
| Region | `na2` |
| CRM | HubSpot Free Tier (Startup Program eligible) |

## Existing Forms

### Early Access Form
- **Form ID**: `15f23943-6824-42d7-9f6f-9a26a8cf1048`
- **Location**: `/early-access` page
- **Fields**: First Name, Last Name, Email, User Type, Ad Platforms, Social Handle, Monthly Spend, Amazon Storefronts

## Embedding Forms in React SPA

### Step 1: Add Script to index.html

```html
<head>
  <!-- Other head content -->
  <script src="https://js-na2.hsforms.net/forms/embed/244830201.js" defer></script>
</head>
```

### Step 2: Create Form Component with useEffect

**Critical**: HubSpot's script only auto-initializes on page load. For SPAs with client-side routing, you MUST programmatically create the form on component mount.

```tsx
import { useEffect, useRef } from "react";

// TypeScript declaration for HubSpot global
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

export default function MyFormPage() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createForm = () => {
      if (window.hbspt && formContainerRef.current) {
        // Clear any existing form first (prevents duplicates on re-render)
        formContainerRef.current.innerHTML = '';
        
        window.hbspt.forms.create({
          region: "na2",
          portalId: "244830201",
          formId: "YOUR_FORM_ID_HERE",
          target: "#hubspot-form-container"
        });
      }
    };

    // If hbspt is already loaded, create immediately
    if (window.hbspt) {
      createForm();
    } else {
      // Poll until script loads
      const checkHbspt = setInterval(() => {
        if (window.hbspt) {
          clearInterval(checkHbspt);
          createForm();
        }
      }, 100);

      // Cleanup interval on unmount
      return () => clearInterval(checkHbspt);
    }
  }, []);

  return (
    <div 
      id="hubspot-form-container" 
      ref={formContainerRef}
    />
  );
}
```

### Why This Pattern?

1. **Direct page load**: Script loads, auto-initializes forms with `hs-form-frame` class
2. **SPA navigation**: Script already loaded but won't re-scan DOM, so we call `hbspt.forms.create()` manually
3. **Polling**: Handles race condition where component mounts before script finishes loading
4. **Cleanup**: Prevents memory leaks from orphaned intervals

## Simple Embed (Non-SPA)

For static HTML pages without client-side routing:

```html
<script src="https://js-na2.hsforms.net/forms/embed/244830201.js" defer></script>
<div 
  class="hs-form-frame" 
  data-region="na2" 
  data-form-id="YOUR_FORM_ID" 
  data-portal-id="244830201"
></div>
```

## Styling HubSpot Forms

HubSpot forms use default light styling. Override with CSS:

```css
/* Target HubSpot form container */
.hs-form-frame {
  /* Your styles */
}

/* Target specific form elements */
.hs-form input[type="text"],
.hs-form input[type="email"] {
  /* Input styles */
}

.hs-form .hs-button {
  /* Submit button styles */
}
```

**Note**: May need `!important` to override HubSpot's inline styles.

## Creating New Forms

1. Log into HubSpot → Marketing → Forms
2. Create form with required fields
3. Get Form ID from the embed code or form URL
4. Use the React pattern above with the new Form ID

## Common Issues

### Form doesn't appear on SPA navigation
- Missing `useEffect` with `hbspt.forms.create()`
- Use the full React pattern above

### Form appears twice
- Not clearing container before creating: add `formContainerRef.current.innerHTML = ''`

### Form not styled correctly
- HubSpot injects its own CSS
- Use high-specificity selectors or `!important`

### reCAPTCHA not loading
- Check if reCAPTCHA is enabled in HubSpot form settings
- Ensure no Content Security Policy blocking Google domains
