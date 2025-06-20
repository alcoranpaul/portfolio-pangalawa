# **Project Overview**

Developed a fully customized Product Tracker system to streamline inventory movement and task tracking within a production environment. The system is actively used by a reputable financial services company to manage daily operations, reduce manual errors, and enhance data transparency. Since deployment, the company has estimated a **25–30% increase in workflow efficiency**.

# **Technologies Used**

- **MS Excel** for the initial prototype and single-user interface  
- **MS Access** for scalable, multi-user deployment  
- **VBA (Visual Basic for Applications)** to implement custom forms, logic, and automated workflows  
- **Split Front-End/Back-End Architecture** for improved performance and simultaneous multi-user access  

# **Key Features & Implementation Details**

## Modular System Architecture

- Designed three distinct yet interconnected modules: **Input Form**, **Output Form**, and **Report Generator**, each handling a core function of the tracking system.  
- Ensured modularity for future enhancements and easier maintenance.

## Seamless Transition to Multi-User Support

- Developed separate applications for **Excel (single-user)** and **Access (multi-user)** to accommodate the client’s operational constraints and requirements.  
- Adopted a **front-end/back-end database split** in Access, enhancing performance and data integrity while supporting simultaneous users.

## UID-Based Data Logging

- Implemented a user identification (UID) system to associate data entries with individual users.  
  - **Input Form**: Captures incoming product entries along with the responsible user.  
  - **Output Form**: Flags products as completed and records the finalizing user.  
- Enabled transparent accountability and tracking for each transaction.

## Full CRUD Functionality via VBA

- Built robust **Create, Read, Update, and Delete** operations entirely with VBA, allowing for a tailored user interface and business logic.  
- Ensured validation, confirmation dialogs, and fail-safes to prevent accidental data loss.

## Real-Time Reporting

- Created a **Report Generator** to deliver real-time insights into product flow, backlog, and completion status.  
- Reports could be filtered by date range, user, or product type to support operations and management review.

## Custom Search Filter

- Developed a **custom search and filter mechanism from scratch** using VBA to allow users to search product records by multiple fields (e.g., product name, UID, date, status).  
- Provided a fast, intuitive interface for locating specific entries without needing advanced query knowledge, enhancing data accessibility for non-technical users.

## Workflow Automation & Optimization

- Automated repetitive tasks like status updates, timestamping, and user logging.  
- Reduced manual effort and errors by **20%**, with an overall estimated **25–30% gain in workflow efficiency**.

# **Collaboration & Iteration**

- Maintained ongoing communication with the client to gather feedback and adjust features to their evolving operational requirements.  
- Delivered iterative updates based on real-world usage and team input, ensuring the tool remained relevant and effective over time.

# **Challenges & Solutions**

- **Challenge:** Transitioning from a single-user Excel environment to a scalable multi-user platform, despite client restrictions on Access usage in their production environment.  
  - **Solution:** Developed separate Excel and Access applications, enabling single-user usage with Excel and multi-user support through Access with a split database design.

- **Challenge:** Ensuring ease of use for non-technical users.  
  - **Solution:** Built intuitive forms with clear prompts, tooltips, and automated logging, requiring minimal training.

- **Challenge:** Maintaining data accuracy while reducing manual intervention.  
  - **Solution:** Introduced automated timestamping and UID-based tracking to verify all entries and updates.

- **Challenge:** Providing users with efficient ways to find specific records.  
  - **Solution:** Built a custom, multi-field search filter from scratch to allow flexible, user-friendly record searching and filtering.

# **Outcome & Impact**

- Actively used by a reputable financial services company to manage and track thousands of product movements per month.  
- Improved production task visibility and accountability across departments.  
- Reduced manual entry errors by **20%**, directly enhancing product traceability and inventory accuracy.  
- Enabled seamless team collaboration with reliable, simultaneous access to shared data.  
- Supported operational decision-making with real-time reporting capabilities.  
- Estimated **25–30% increase** in overall workflow efficiency since system deployment.  
- Delivered a maintainable and customizable platform, allowing future scaling and process improvements.

# **Summary**

This project highlights the successful transformation of a manual product tracking process into a robust, digital system tailored to both single- and multi-user environments. By combining Microsoft tools with VBA and thoughtful architecture design, the solution improved data accuracy, operational transparency, and user accountability. Features like custom-built search filters and real-time reporting empower users to work more efficiently and confidently. Ongoing collaboration ensured the system continued to meet the evolving needs of the client and supported continuous improvement in production operations.
