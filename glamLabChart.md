# GLAM-E Lab Copyright Clearance Flowchart

```mermaid
graph TD;
    A[Start: Copyright Clearance Check] --> B[Step 1: Is the work eligible for copyright protection?]
    B -->|No| PD[Public Domain Can apply CC0]
    B -->|Yes| C[Step 2: Who created the work?]

    C -->|Known Creator| D[Step 3: When did the creator die?]
    C -->|Unknown Creator| E[Step 4: Was it published 120+ years ago?]
    
    E -->|Yes| PD
    E -->|No| LegalReview[Requires Extra/Legal Review]

    D -->|Died 70+ years ago?| PD
    D -->|Less than 70 years| CR[Copyrighted]

    D --> F[Step 5: Was it published before 1929? US only]
    F -->|Yes| PD
    F -->|No| G[Step 6: Was it registered and renewed?]
    
    G -->|No| PD
    G -->|Yes| CR

    %% Digital Surrogate Check
    PD --> H[Step 7: Is the digital surrogate a faithful reproduction?]
    CR --> LegalReview

    H -->|Yes| PD
    H -->|No| I[Step 8: Was it creatively modified?]

    I -->|Yes| CR
    I -->|No| J[Step 9: Who owns the digital surrogate?]

    J -->|Institution-Owned| PD
    J -->|Contractor-Owned| LegalReview

    %% Metadata Check
    PD --> K[Step 10: Is the metadata purely factual?]
    CR --> LegalReview

    K -->|Yes| PD_Final[Public Domain Can apply CC0]
    K -->|No| M[Step 11: Who created the metadata?]

    M -->|Institution| PD_Final
    M -->|External Source| CR_Final[Copyrighted]

    %% Final Decisions
    LegalReview -->|Unresolved| LegalReview
    CR --> CR_Final
```
