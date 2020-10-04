(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(160)),r={id:"incident-command-system",title:"Incident Command System"},s={unversionedId:"sre/incidents/incident-command-system",id:"sre/incidents/incident-command-system",isDocsHomePage:!1,title:"Incident Command System",description:"Purpose",source:"@site/docs/sre/incidents/incident-command-system.md",slug:"/sre/incidents/incident-command-system",permalink:"/tech-documentation/docs/sre/incidents/incident-command-system",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sre/incidents/incident-command-system.md",version:"current"},c=[{value:"Purpose",id:"purpose",children:[]},{value:"Contents",id:"contents",children:[]},{value:"History and Introduction of Incident Response",id:"history-and-introduction-of-incident-response",children:[{value:"The Incident Command System (ICS)",id:"the-incident-command-system-ics",children:[]},{value:"When to use a system like ICS",id:"when-to-use-a-system-like-ics",children:[]}]},{value:"People Roles and Incident Categorization",id:"people-roles-and-incident-categorization",children:[{value:"Anatomy of Incident Command",id:"anatomy-of-incident-command",children:[]},{value:"Criteria for Severity",id:"criteria-for-severity",children:[]},{value:"The Difference in Emergency Operations",id:"the-difference-in-emergency-operations",children:[]},{value:"Response Team Goals",id:"response-team-goals",children:[]},{value:"Role of Incident Commander",id:"role-of-incident-commander",children:[]}]},{value:"Best Practices for Incident Commanders",id:"best-practices-for-incident-commanders",children:[]},{value:"Other Roles in Incident Command",id:"other-roles-in-incident-command",children:[{value:"Deputy Role",id:"deputy-role",children:[]},{value:"Scribe Role",id:"scribe-role",children:[]},{value:"Communications Liaison",id:"communications-liaison",children:[]}]},{value:"Incident Response at Scale",id:"incident-response-at-scale",children:[{value:"Setting this up at scale",id:"setting-this-up-at-scale",children:[]},{value:"Incident Response - Typical Sequence of Events",id:"incident-response---typical-sequence-of-events",children:[]},{value:"How Do Roles Scale Down",id:"how-do-roles-scale-down",children:[]},{value:"How to Prepare to Manage Incident Response Teams",id:"how-to-prepare-to-manage-incident-response-teams",children:[]}]},{value:"Incident Response Pitfalls and How to Avoid Them",id:"incident-response-pitfalls-and-how-to-avoid-them",children:[{value:"Anti-patterns",id:"anti-patterns",children:[]}]},{value:"Follow Up and Postmortem",id:"follow-up-and-postmortem",children:[{value:"After Incident Resolution",id:"after-incident-resolution",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Other Incident Response Resources",id:"other-incident-response-resources",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"The intention of this document is to help understand how to build a foundation for an effective incident response process in our organization. To accomplish this, this document covers suggested practices needed for successful incident response, practices that limit damage and reduce recovery time and costs, how to scale the Incident Command System (ICS) up or down as necessary for your teams, mapping ICS roles to real responders in your organization as well as describe considerations when taking on multiple roles, and how to effectively communicate with stakeholders during major incidents.  "),Object(o.b)("h2",{id:"contents"},"Contents"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#history-and-introduction-of-incident-response"}),"History and Introduction of Incident Response"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#people-roles-and-incident-categorization"}),"People Roles and Incident Categorization"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#best-practices-for-incident-commanders"}),"Best Practices for Incident Commanders"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#other-roles-in-incident-command"}),"Other Roles in Incident Command"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#incident-response-at-scale"}),"Incident Response at Scale"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#incident-response-pitfalls-and-how-to-avoid-them"}),"Incident Response Pitfalls and How to Avoid Them"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#follow-up-and-postmortem"}),"Follow Up and Postmortem"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#summary"}),"Summary"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#other-incident-response-resources"}),"Other Incident Response Resources"),"  "),Object(o.b)("h2",{id:"history-and-introduction-of-incident-response"},"History and Introduction of Incident Response"),Object(o.b)("p",null,"Consumers expect perfection.",Object(o.b)("br",{parentName:"p"}),"\n","Consumers wait less than one minute before abandoning an application.  "),Object(o.b)("p",null,"Teams face massive complexity. 5 hours is the average amount of time it takes organizations to resolve a major (customer-impacting) incident.  "),Object(o.b)("p",null,"Vital to have a strategy to minimize the impact of incidents and reduce their recovery time and associated cost.\nIncident Response is the continuous process of developing, practicing, and refining that strategy.  "),Object(o.b)("p",null,"Incident - An incident is any unplanned disruption or event that is actively affecting customers' ability to use the product.",Object(o.b)("br",{parentName:"p"}),"\n","The goal of incident response is to handle a situation in a way that ",Object(o.b)("strong",{parentName:"p"},"limits damage and reduces recovery time and cost"),".  "),Object(o.b)("p",null,"Replace chaos with calm.  "),Object(o.b)("p",null,"Incident Response is an ",Object(o.b)("em",{parentName:"p"},"organized")," approach to addressing and managing an incident in a way that ",Object(o.b)("strong",{parentName:"p"},"reduces damages, recovery time, and cost"),".",Object(o.b)("br",{parentName:"p"}),"\n","To accomplish this goal, you must:  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Mobilize and inform only the right people at the right time.  "),Object(o.b)("li",{parentName:"ul"},"Use systematic learning and improvement.  "),Object(o.b)("li",{parentName:"ul"},"Work toward total automation.  ")),Object(o.b)("h3",{id:"the-incident-command-system-ics"},"The Incident Command System (ICS)"),Object(o.b)("p",null,"National model for command structures for any major incident.",Object(o.b)("br",{parentName:"p"}),"\n","Used so emergency personnel can have a standardized response everyone is familiar with. It helps to prevent confusion and chaos during an incident.  "),Object(o.b)("p",null,"What our version of ICS ",Object(o.b)("strong",{parentName:"p"},"should not")," be in technology.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Inflexible set of rules",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Culture and processes are constantly evolving"),Object(o.b)("li",{parentName:"ul"},"Frameworks need to allow for improvement and growth"))),Object(o.b)("li",{parentName:"ul"},"Indication of Future Failure",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Organizations can adapt from any starting point"),Object(o.b)("li",{parentName:"ul"},"Only prerequisite is keeping an open mind"))),Object(o.b)("li",{parentName:"ul"},"Do or Die Mentality",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Every company is set up differently"),Object(o.b)("li",{parentName:"ul"},"Culture change requires buy-in and time to adjust")))),Object(o.b)("h3",{id:"when-to-use-a-system-like-ics"},"When to use a system like ICS"),Object(o.b)("p",null,"An incident is any unplanned disruption or event that is affecting customer ability to use the product.  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Commonalities of Minor Incidents"),Object(o.b)("br",{parentName:"p"}),"\n","Not Urgent; can be handled during normal business hours.",Object(o.b)("br",{parentName:"p"}),"\n","Situation is a known failure mode with a known fix.",Object(o.b)("br",{parentName:"p"}),"\n","Within the responsibilities of a ",Object(o.b)("strong",{parentName:"p"},"small team"),".  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Commonalities of Major Incidents"),Object(o.b)("br",{parentName:"p"}),"\n","Timing is a surprise: typically little to no warning.",Object(o.b)("br",{parentName:"p"}),"\n","Time matters. Need to respond quickly.",Object(o.b)("br",{parentName:"p"}),"\n","Situation is rarely perfectly understood at the start.",Object(o.b)("br",{parentName:"p"}),"\n","Require coordination and mobilization; often cross-functional.  "),Object(o.b)("p",null,"A major incident requires a coordinated response between multiple teams. This definition may differ for different teams and/por organizations.",Object(o.b)("br",{parentName:"p"}),"\n","Need to define what a major incident is to your team or organization.  "),Object(o.b)("p",null,"Use the Incident Command System for Major Incidents.",Object(o.b)("br",{parentName:"p"}),"\n","Major Incidents rarely start out as Major Incidents. Major Incidents usually evolve from a series of minor incidents.  "),Object(o.b)("h2",{id:"people-roles-and-incident-categorization"},"People Roles and Incident Categorization"),Object(o.b)("h3",{id:"anatomy-of-incident-command"},"Anatomy of Incident Command"),Object(o.b)("p",null,"Severity can often be calculated by how severely our metrics are impacted.  "),Object(o.b)("h3",{id:"criteria-for-severity"},"Criteria for Severity"),Object(o.b)("p",null,"Severity 1 - Critical issue that warrants public notification and liaison with executive teams.",Object(o.b)("br",{parentName:"p"}),"\n","Criteria:  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The system is in a critical state and is actively impacting a large number of customers.  "),Object(o.b)("li",{parentName:"ul"},"Functionality has been severely impaired for a long time, breaking SLA.  "),Object(o.b)("li",{parentName:"ul"},"Customer-data-exposing security vulnerability has come to our attention.  "),Object(o.b)("li",{parentName:"ul"},"Major incident response.  ")),Object(o.b)("p",null,"Severity 2 - Critical system issue actively impacting many customers' ability to use the product.",Object(o.b)("br",{parentName:"p"}),"\n","Criteria:  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Notification pipeline is severely impaired.  "),Object(o.b)("li",{parentName:"ul"},"Incident response functionality (ack, resolve, etc) is severely impaired.  "),Object(o.b)("li",{parentName:"ul"},"App is unavailable or experiencing severe performance degradation for most/all users.  "),Object(o.b)("li",{parentName:"ul"},"Monitoring of PagerDuty systems for major incident conditions is impaired.  "),Object(o.b)("li",{parentName:"ul"},"Any other event to which a PagerDuty employee deems necessary for incident response.  "),Object(o.b)("li",{parentName:"ul"},"Major incident response.  ")),Object(o.b)("p",null,"Severity 3 - Stability or minor customer-impacting issues that require immediate attention from service owners.",Object(o.b)("br",{parentName:"p"}),"\n","Criteria:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Partial loss of functionality, not affecting majority of customers.  "),Object(o.b)("li",{parentName:"ul"},"Something that has the likelihood of becoming a Sev-2 if nothing is done.  "),Object(o.b)("li",{parentName:"ul"},"No redundancy in a service (failure of 1 more node will cause outage).  "),Object(o.b)("li",{parentName:"ul"},"High-Urgency page to service team.  ")),Object(o.b)("p",null,"Severity 4 - Minor issue requiring action, but not affecting customer ability to use the product.",Object(o.b)("br",{parentName:"p"}),"\n","Criteria:  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Performance issues (delays, etc.) (I would argue performance IS a requirement for applications these days and is a more severe page in many cases).  "),Object(o.b)("li",{parentName:"ul"},"Individual host failure (i.e one node out of a cluster).  "),Object(o.b)("li",{parentName:"ul"},"Delayed job failure (not impacting event and notification pipeline).  "),Object(o.b)("li",{parentName:"ul"},"Cron failure (not impacting event and notification pipeline).  "),Object(o.b)("li",{parentName:"ul"},"Low-Urgency page to service team.  ")),Object(o.b)("p",null,"Severity 5 - Cosmetic issues or bugs. not affecting customer ability to use the product.",Object(o.b)("br",{parentName:"p"}),"\n","Criteria:  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Bugs not impacting the immediate ability to use the system.  "),Object(o.b)("li",{parentName:"ul"},"Jira/ServiceNow ticket (or GitHub issue).  ")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Anyone")," can trigger the Incident Response Process at any time.",Object(o.b)("br",{parentName:"p"}),"\n","Automatic incident detection, triggering, and resolution whenever it can be done reliably, effectively, and accurately to reduce the human time to evaluate an incident is highly encouraged. But encouraging humans to trigger the incident response process is also highly encouraged when an incident not caught through automation is observed. It will lead to more incidents being resolved more quickly.",Object(o.b)("br",{parentName:"p"}),"\n","For example, someone in marketing things a chart looks wrong, it should be encouraged they start the incident response process to notify the correct team of potential issue. Create a culture of transparency and trust from all areas of the organization.  "),Object(o.b)("p",null,"PagerDuty example: They use Slack command and a bot to trigger the Incident Response process.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"!ic page"),"  "),Object(o.b)("p",null,"Use business metrics to drive automation of incident creation. Use metrics that let you know how your business is doing, not how a piece of equipment is doing.",Object(o.b)("br",{parentName:"p"}),"\n","Examples: Netflix may use stream starts per second. Amazon may use orders per second.  "),Object(o.b)("p",null,"Avoid using metrics that are not tied to business (such as high CPU Utilization) for incidents. It is very difficult if not impossible to determine severity if using non business driven metrics.  "),Object(o.b)("h3",{id:"the-difference-in-emergency-operations"},"The Difference in Emergency Operations"),Object(o.b)("p",null,"Hierarchy, clear order, work fast.",Object(o.b)("br",{parentName:"p"}),"\n","Resolution team has the highest authority.",Object(o.b)("br",{parentName:"p"}),"\n","Team works together to resolve incident, document what happened, and keep stakeholders updated.",Object(o.b)("br",{parentName:"p"}),"\n","Emergency mode until the incident is officially resolved.  "),Object(o.b)("p",null,"One and only one person/role in charge.  "),Object(o.b)("p",null,"Avoid Decision Paralysis",Object(o.b)("br",{parentName:"p"}),"\n","Taking the wrong action is better than taking no action.  "),Object(o.b)("h3",{id:"response-team-goals"},"Response Team Goals"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Work to resolve the incident quickly. (Deploy immediately to production instead of a typical build process).  "),Object(o.b)("li",{parentName:"ul"},"Work to resolve the incident efficiently. (Methodical in approach by following the tenets of Incident Command).  "),Object(o.b)("li",{parentName:"ul"},"Document decisions and follow up items. (Incidents should be documented real time to avoid hindsight bias).  "),Object(o.b)("li",{parentName:"ul"},"Keep stakeholders informed. (Incidents impact business functionality. Keeping stakeholders informed helps manage the impact felt by other parts of the organization).  "),Object(o.b)("li",{parentName:"ul"},"Stay in wartime until the incident is officially resolved. (Incidents impact business functionality. Keeping stakeholders informed helps manage the impact felt by other parts of the organization).  ")),Object(o.b)("h3",{id:"role-of-incident-commander"},"Role of Incident Commander"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Keep the process on track. Focus on taking actions and keep the process moving in an organized, calm, and effective manner.  "),Object(o.b)("li",{parentName:"ul"},"They are in charge and the single source of reference.  "),Object(o.b)("li",{parentName:"ul"},"Permission to perform any task should go through the incident commander. This is less about authority and more about voicing tasks and actions and giving the scribe and other members of the command layer to understand and document what is happening.  "),Object(o.b)("li",{parentName:"ul"},"The incident commander is ",Object(o.b)("strong",{parentName:"li"},"not a resolver"),", they coordinate and delegate.  "),Object(o.b)("li",{parentName:"ul"},'Gain consensus of actions to be taken. "Are there any strong objections?"  '),Object(o.b)("li",{parentName:"ul"},"Make a decision. Again, making the wrong decision is better than making no decision.  "),Object(o.b)("li",{parentName:"ul"},"Ask for a status, decide action, gain consensus, assign task, follow up on task completion. Repeat.  "),Object(o.b)("li",{parentName:"ul"},"Size-up, stabilize, update, verify. Repeat.  ")),Object(o.b)("p",null,"Importance of Incident Commander Role:  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Keeps everyone focused"),Object(o.b)("li",{parentName:"ul"},"Keeps decision-making moving"),Object(o.b)("li",{parentName:"ul"},"Helps to avoid the bystander effect (specifically select/assign a person to do a specific task)"),Object(o.b)("li",{parentName:"ul"},"Keep things moving towards a resolution during a major incident"),Object(o.b)("li",{parentName:"ul"},"A common framework for heterogeneous teams"),Object(o.b)("li",{parentName:"ul"},"Dedicated role(s) for communicating stakeholder updates"),Object(o.b)("li",{parentName:"ul"},"Dedicated role(s) for customer response"),Object(o.b)("li",{parentName:"ul"},"A team focused on helping to mitigate future incidents"),Object(o.b)("li",{parentName:"ul"},"Trained team creates space for responders to work as they normally would ")),Object(o.b)("h2",{id:"best-practices-for-incident-commanders"},"Best Practices for Incident Commanders"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Stabilization Loop"),"\nSize-up the situation, stabilize the situation, give an update on the situation, and verify if the situation has been stabilized. Repeat.",Object(o.b)("br",{parentName:"p"}),"\n","Within the stabilize loop:",Object(o.b)("br",{parentName:"p"}),"\n","Ask for a status, decide action, gain consensus, assign task, follow up on task completion. Repeat.  "),Object(o.b)("p",null,"The incident commander is not a resolver, they coordinate and delegate.",Object(o.b)("br",{parentName:"p"}),"\n","The incident commander is the highest authority (even higher than the CEO).  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Practice the two ears and one mouth rule.")),Object(o.b)("p",null,"1st rule of incidents. Don't Panic"),Object(o.b)("p",null,"Good communication is essential.",Object(o.b)("br",{parentName:"p"}),"\n","Introduce yourself by name.",Object(o.b)("br",{parentName:"p"}),"\n",'Say "Incident Commander" - Establishes you are the one running the war room (in charge)',Object(o.b)("br",{parentName:"p"}),"\n",'"Hello, this is Greg. I am the Incident Commander."'),Object(o.b)("p",null,"Avoid acronyms if possible.",Object(o.b)("br",{parentName:"p"}),"\n","Clear is better than concise.  "),Object(o.b)("p",null,"If no one with Incident Commander training is on the call, it is best to not assign an Incident Commander role."),Object(o.b)("p",null,"Size-Up",Object(o.b)("br",{parentName:"p"}),"\n","Stabilize",Object(o.b)("br",{parentName:"p"}),"\n","Update",Object(o.b)("br",{parentName:"p"}),"\n","Verify  "),Object(o.b)("p",null,"Stabilize:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Ask for a status"),Object(o.b)("li",{parentName:"ol"},"Decide action, gain consensus"),Object(o.b)("li",{parentName:"ol"},"Assign Task"),Object(o.b)("li",{parentName:"ol"},"Follow up on task completion")),Object(o.b)("p",null,"Ask what actions we can take. Ask the experts of their service.",Object(o.b)("br",{parentName:"p"}),"\n","What are the risks involved with the proposed action?",Object(o.b)("br",{parentName:"p"}),"\n","Make a decision. Making a wrong decision is better than not making a decision.",Object(o.b)("br",{parentName:"p"}),"\n","Gain consensus.",Object(o.b)("br",{parentName:"p"}),"\n",'"I propose ',Object(o.b)("inlineCode",{parentName:"p"},"<action>"),". Are there any strong objections to this ",Object(o.b)("inlineCode",{parentName:"p"},"<action>"),"? It is difficult to gain consensus on large calls. As an incident commander, you only care about those who strongly disagree with the proposed action(s).",Object(o.b)("br",{parentName:"p"}),"\n","Clear Ownership. Clearly delegate tasks. Assign tasks to a specific person. It is ok to assign tasks to a role if names of people on the call are unknown.",Object(o.b)("br",{parentName:"p"}),"\n","Make sure you get acknowledgement from the assigned person they understand the task and they are the one to do it.",Object(o.b)("br",{parentName:"p"}),"\n","Time box all tasks  "),Object(o.b)("p",null,"What if they need more time? May be good to ask the experts how much time they think they will need to complete the task.  "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"What's wrong?  "),Object(o.b)("li",{parentName:"ol"},"What action can we take? What are the risks?  "),Object(o.b)("li",{parentName:"ol"},"Clear ownership with a timebox.  "),Object(o.b)("li",{parentName:"ol"},"What's the status?")),Object(o.b)("h2",{id:"other-roles-in-incident-command"},"Other Roles in Incident Command"),Object(o.b)("p",null,"These roles are the minimum bases to cover. Bigger organizations may have other roles that fit with their business.  "),Object(o.b)("h3",{id:"deputy-role"},"Deputy Role"),Object(o.b)("p",null,"Keeps the Incident Commander focused",Object(o.b)("br",{parentName:"p"}),"\n","They are not a shadow to the Incident Commander. They are expected to perform important tasks.",Object(o.b)("br",{parentName:"p"}),"\n","Takes on any and all additional tasks as necessary",Object(o.b)("br",{parentName:"p"}),"\n","Serves to follow up on reminders and ensure tasks aren't missed",Object(o.b)("br",{parentName:"p"}),"\n",'Acts as a "hot standby" for the Incident Commander  '),Object(o.b)("h3",{id:"scribe-role"},"Scribe Role"),Object(o.b)("p",null,"Documents the incident timeline and important events as they occur",Object(o.b)("br",{parentName:"p"}),"\n","The incident log will be used during the postmortem process",Object(o.b)("br",{parentName:"p"}),"\n","Note when important actions are taken, follow-up items, and status updates",Object(o.b)("br",{parentName:"p"}),"\n","Anyone can be a Scribe - role is typically assigned by the Incident Commander at the start of the call  "),Object(o.b)("h3",{id:"communications-liaison"},"Communications Liaison"),Object(o.b)("p",null,"Can be external, internal, or both",Object(o.b)("br",{parentName:"p"}),"\n","Notifies customers of current conditions and informs the Incident Commander of relevant feedback",Object(o.b)("br",{parentName:"p"}),"\n","Crafts language appropriate status updates and notification messages",Object(o.b)("br",{parentName:"p"}),"\n","Typically a member of the Support team",Object(o.b)("br",{parentName:"p"}),"\n","Notify Stakeholders  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Recommended to not send updates/notifications more frequently than every 20 to 30 minutes unless a big update occurs.  ")),Object(o.b)("h2",{id:"incident-response-at-scale"},"Incident Response at Scale"),Object(o.b)("h3",{id:"setting-this-up-at-scale"},"Setting this up at scale"),Object(o.b)("p",null,"For a department-wide Incident Response process, you will need a few things set up to begin. This includes:"),Object(o.b)("p",null,"An on-call schedule for a primary and backup Incident Commander (this role is team agnostic)",Object(o.b)("br",{parentName:"p"}),"\n","On-call schedules for primary and backup subject matter experts (one primary and one backup for each team)",Object(o.b)("br",{parentName:"p"}),"\n","Additional on-call rotations for other roles",Object(o.b)("br",{parentName:"p"}),"\n","A method of paging team members (response mobilization)  "),Object(o.b)("h3",{id:"incident-response---typical-sequence-of-events"},"Incident Response - Typical Sequence of Events"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Subject Matter Expert (SME) - Usually first individual to respond and solve (or escalate)  "),Object(o.b)("li",{parentName:"ol"},"If the incident is not resolved by the SME and the incident worsens and becomes a major incident (war room situation), an escalation will be triggered.  "),Object(o.b)("li",{parentName:"ol"},"Once that incident is triggered, the Incident Commander, Scribe, Deputy, and Liaisons should be paged in.  "),Object(o.b)("li",{parentName:"ol"},"If needed, additional SMEs should be paged in.  ")),Object(o.b)("h3",{id:"how-do-roles-scale-down"},"How Do Roles Scale Down"),Object(o.b)("p",null,"For a small team-based incident response, you will beed a few things set up to begin. This includes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An on call schedule for primary and backup subject matter experts  "),Object(o.b)("li",{parentName:"ul"},"A method of paging out other team members  ")),Object(o.b)("h3",{id:"how-to-prepare-to-manage-incident-response-teams"},"How to Prepare to Manage Incident Response Teams"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Step 1 - Ensure explicit processes and expectations exist.  "),Object(o.b)("li",{parentName:"ol"},"Step 2 - Set up runbooks and automated actions",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Create priority based triages  "))),Object(o.b)("li",{parentName:"ol"},"Step 3 - Find ways to create more space for your teams to work  "),Object(o.b)("li",{parentName:"ol"},"Step 4 - Make Checklists (refer to Checklist Manifesto Notes)  Mitigate risk and minimize mistakes wherever possible.  ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Checklists also create break points and opportunities to step back where needed.  "))),Object(o.b)("li",{parentName:"ol"},"Step 5 - Practice Running Major Incidents as a Team. (Have a failure Friday? Intentionally break something and create an incident and practice as a team)")),Object(o.b)("h2",{id:"incident-response-pitfalls-and-how-to-avoid-them"},"Incident Response Pitfalls and How to Avoid Them"),Object(o.b)("h3",{id:"anti-patterns"},"Anti-patterns"),Object(o.b)("p",null,'Executive joins the call. "Ignore the IC, Do what I say!" - remember the IC is the ultimate authority on the war room.',Object(o.b)("br",{parentName:"p"}),"\n","Strategy to avoid this:",Object(o.b)("br",{parentName:"p"}),"\n",'You can ask that executive, "Do you wish to take command?"',Object(o.b)("br",{parentName:"p"}),"\n",'You can state, "We understand your concern, but your slowing down the process of resolving the issue."  '),Object(o.b)("p",null,'Executive joins the call. "Can I get a spreadsheet of all the affected customers?"\nStrategy to avoid this:',Object(o.b)("br",{parentName:"p"}),"\n",'You can state, "We can either get you that list, or fix the incident. Not both. The incident takes priority."  '),Object(o.b)("p",null,'Executive joins the call. "Is this really a Sev-1?"',Object(o.b)("br",{parentName:"p"}),"\n","Strategy to avoid this:\nDo not discuss severity during the call. ",Object(o.b)("strong",{parentName:"p"},"Don't debate severity during call.")," When it doubt, default to a higher severity. The place for the severity discussion is during the post mortem.  "),Object(o.b)("p",null,"Failure to Notify Customers  "),Object(o.b)("p",null,"Getting Everyone on the Call / Forcing Everyone to Stay on the Call  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Don't do this. No one wants to be on calls they are not needed for. Let people drop off if they are not needed.  ")),Object(o.b)("p",null,"Being overly focused on an issue.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Keep bigger picture in mind. Try not to get tunnel vision.  ")),Object(o.b)("p",null,"Requiring deeply technical Incident Commanders"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Don't need deep technical knowledge. Rely on SMEs for tech know how.  ")),Object(o.b)("p",null,"Taking on multiple roles  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Don't take on multiple roles. Do your job and trust others to do theirs.  ")),Object(o.b)("p",null,"Litigating policy during an incident.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Don't try and adjust policy or process during an incident. This should be handled during the postmortem.  ")),Object(o.b)("p",null,"The Belligerent Responder  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If there is an unruly person on the call (strong egos, big opinions), be firm and let the person know they are being disruptive. Let them know of their behavior and state they will be removed if they continue. No second chances.  ")),Object(o.b)("p",null,"Handoffs are encouraged  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Incident commanders are people too. When fatigue sets in, it's important to hand off the incident commander role to someone else.  ")),Object(o.b)("h2",{id:"follow-up-and-postmortem"},"Follow Up and Postmortem"),Object(o.b)("h3",{id:"after-incident-resolution"},"After Incident Resolution"),Object(o.b)("p",null,"Don't neglect the postmortem.",Object(o.b)("br",{parentName:"p"}),"\n","Without a postmortem you will fail to recognize what is going right and, most importantly, how to avoid the same situation in future.",Object(o.b)("br",{parentName:"p"}),"\n","An incident is not considered complete until a postmortem is published.",Object(o.b)("br",{parentName:"p"}),"\n","BLAMELESS - you can't fire your way to reliability",Object(o.b)("br",{parentName:"p"}),"\n","When there is a culture of blame, engineers will hesitate to speak up and this results in longer resolution times. Psychological safety.",Object(o.b)("br",{parentName:"p"}),"\n","Review the incident response process during postmortem. "),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,"An incident is any unplanned disruption or event that is actively affecting customers' ability to use the product.",Object(o.b)("br",{parentName:"p"}),"\n","A major incident requires a coordinated response between multiple teams.",Object(o.b)("br",{parentName:"p"}),"\n","Anyone can trigger the Incident Response Process at any time.",Object(o.b)("br",{parentName:"p"}),"\n","Incident Response is the practice of developing, practicing, and refining incident strategy.",Object(o.b)("br",{parentName:"p"}),"\n","The goals of Incident Response are to limit damage and its associated costs.",Object(o.b)("br",{parentName:"p"}),"\n","Use ICS only for major incidents.  "),Object(o.b)("p",null,"Don't neglect the postmortem.",Object(o.b)("br",{parentName:"p"}),"\n","The postmortem is just as important as the resolution process.  "),Object(o.b)("p",null,"Incident Command is a cycle that repeats until an incident is resolved.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Size-Up  "),Object(o.b)("li",{parentName:"ul"},"Stabilize  "),Object(o.b)("li",{parentName:"ul"},"Update  "),Object(o.b)("li",{parentName:"ul"},"Verify  ")),Object(o.b)("p",null,"Each role specializes in a specific task to streamline response.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Automate responses and workflows based on machine learning.  ")),Object(o.b)("p",null,"Getting started takes buy-in, preparation, and practice.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create clearly defined definitions and process  "),Object(o.b)("li",{parentName:"ul"},"Set up runbooks and other automated actions  "),Object(o.b)("li",{parentName:"ul"},"Make Checklists  "),Object(o.b)("li",{parentName:"ul"},"Practice running major incidents as a team.  ")),Object(o.b)("h2",{id:"other-incident-response-resources"},"Other Incident Response Resources"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://response.pagerduty.com/"}),"PagerDuty Incident Response"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://new-wiki.optum.com/display/optumSRE/SRE+Cert+-+Incident+Response"}),"Optum SRE Incident Response"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://landing.google.com/sre/sre-book/chapters/managing-incidents/"}),"Google - Managing Incidents"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://optum.percipio.com/courses/e0237714-ea51-11e6-965b-0242c0a80b04/videos/e0237717-ea51-11e6-965b-0242c0a80b04"}),"Optum Percipio - Exploring Incident Management"),"  "))}b.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||o;return n?i.a.createElement(u,s(s({ref:t},l),{},{components:n})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);