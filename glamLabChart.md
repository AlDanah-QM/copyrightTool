

graph TD;
    A[Start: Copyright Clearance Check] --> B[Step 1: Is the work eligible for copyright protection?]
    B -->|No| PD1[Public Domain Can apply CC0]
    B -->|Yes| C[Step 2: Who created the work?]

    C -->|Known Creator| D[Step 3: When did the creator die?]
    C -->|Unknown Creator| E[Step 4: Was it published 120+ years ago?]
    
    E -->|Yes| PD2[Public Domain Can apply CC0]
    E -->|No| L1[Requires Extra/Legal Review]

    D -->|Died 70+ years ago?| PD3[Public Domain Can apply CC0]
    D -->|Less than 70 years| CR1[Copyrighted]

    D --> F[Step 5: Was it published before 1929? US only]
    F -->|Yes| PD4[Public Domain Can apply CC0]
    F -->|No| G[Step 6: Was it registered and renewed?]
    
    G -->|No| PD5[Public Domain Can apply CC0]
    G -->|Yes| CR2[Copyrighted]

    %% Digital Surrogate Check
    PD1 & PD2 & PD3 & PD4 & PD5 --> H[Step 7: Is the digital surrogate a faithful reproduction?]
    CR1 & CR2 --> L1

    H -->|Yes| PD6[Public Domain Can apply CC0]
    H -->|No| I[Step 8: Was it creatively modified?]

    I -->|Yes| CR3[Copyrighted]
    I -->|No| J[Step 9: Who owns the digital surrogate?]

    J -->|Institution-Owned| PD7[Public Domain Can apply CC0]
    J -->|Contractor-Owned| L2[Requires Extra/Legal Review]

    %% Metadata Check
    PD6 & PD7 --> K[Step 10: Is the metadata purely factual?]
    CR3 & L2 --> L1
    
    K -->|Yes| PD8[Public Domain Can apply CC0]
    K -->|No| M[Step 11: Who created the metadata?]

    M -->|Institution| PD9[Public Domain Can apply CC0]
    M -->|External Source| CR4[Copyrighted]

    %% Final Decisions
    PD8 & PD9 --> PD_Final[Public Domain Can apply CC0]
    CR3 & CR4 --> CR_Final[Copyrighted]
    L1 & L2 --> LegalReview[Requires Extra/Legal Review]
