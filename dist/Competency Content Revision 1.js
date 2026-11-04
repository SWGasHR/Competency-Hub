/* Source content: 2026 Competency Rubric v2(1), Director Champion Playbook FINAL(1), and existing HTML coaching suggestions. */
window.HUB_CONTENT = {
  "rubric": {
    "source": "2026 Competency Rubric v2(1).xlsx",
    "status": {
      "modelAndDefinitions": "finalized per Director Champion Playbook",
      "behaviorsAndRatingDesign": "in development per Director Champion Playbook",
      "personas": "draft"
    },
    "roleMapping": {
      "nxs": "nxs",
      "nxt": "exempt_nxt",
      "exempt": "exempt_nxt",
      "people_leader": "people_leader",
      "senior_leader": "senior_leader"
    },
    "counts": {
      "competencies": 10,
      "core": 5,
      "additionalPeopleLeader": 3,
      "additionalSeniorLeader": 2,
      "behaviorRecords": 112,
      "ratingAnchors": 408
    },
    "competencies": [
      {
        "id": "action-oriented",
        "name": "Action Oriented",
        "sourceSheet": "Action Oriented",
        "definition": "Taking on new opportunities and tough challenges with a sense of urgency, high energy, and enthusiasm.",
        "definitionSourceCell": "B2",
        "group": "core",
        "roles": {
          "nxs": {
            "sourceLabel": "Non-Exempt Step",
            "sourceHeaderCell": "B5",
            "behaviors": [
              {
                "id": "action-oriented-nxs-1",
                "statement": "Displays a can-do attitude and enthusiasm.",
                "sourceCell": "B7",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C7",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Displays pessimism and reluctance when taking on tasks and assignments."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D7",
                    "label": "2 - Meets Expectations",
                    "text": "Takes on work and assignments with optimism, enthusiasm, and a can-do attitude that positively influences others."
                  }
                ]
              },
              {
                "id": "action-oriented-nxs-2",
                "statement": "Confirms what needs to be done and then does it.",
                "sourceCell": "B8",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C8",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Waits to be told what to do rather than identifying what needs to be done."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D8",
                    "label": "2 - Meets Expectations",
                    "text": "Identifies critical needs and the appropriate actions to take, then acts promptly without hesitation."
                  }
                ]
              },
              {
                "id": "action-oriented-nxs-3",
                "statement": "Begins work early enough to meet deadlines.",
                "sourceCell": "B9",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C9",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Delays starting work, allowing deadlines to approach without progress."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D9",
                    "label": "2 - Meets Expectations",
                    "text": "Starts work promptly enough to meet deadlines and begins early when advantageous, even when deadlines are distant."
                  }
                ]
              },
              {
                "id": "action-oriented-nxs-4",
                "statement": "Takes action without relying on unnecessary oversight.",
                "sourceCell": "B10",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C10",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Typically seeks help when dealing with routine problems, even though they have the resources and knowledge to handle the situation."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D10",
                    "label": "2 - Meets Expectations",
                    "text": "Resolves routine problems independently and promptly, while recognizing when more complex problems should be escalated."
                  }
                ]
              }
            ]
          },
          "exempt_nxt": {
            "sourceLabel": "Exempt & Non-Exempt Traditional",
            "sourceHeaderCell": "B12",
            "behaviors": [
              {
                "id": "action-oriented-exempt-nxt-1",
                "statement": "Initiates timely action to address important issues.",
                "sourceCell": "B14",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C14",
                    "label": "1 - Developing",
                    "text": "Delays taking the necessary action to resolve issues or problems (e.g., asks for too much assistance and direction, even on matters that they has the authority to handle alone)."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D14",
                    "label": "2 - Progressing",
                    "text": "Occasionally takes timely action on important issues; may still seek direction at times but is becoming more confident in acting independently"
                  },
                  {
                    "value": 3,
                    "sourceCell": "E14",
                    "label": "3 - Practicing",
                    "text": "Takes action on important issues in a timely manner."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F14",
                    "label": "4 - Advancing",
                    "text": "Takes immediate, decisive, and independent action to resolve issues or problems in a timely manner."
                  }
                ]
              },
              {
                "id": "action-oriented-exempt-nxt-2",
                "statement": "Moves quickly to seize opportunities.",
                "sourceCell": "B15",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C15",
                    "label": "1 - Developing",
                    "text": "Addresses new opportunities with caution or reluctance."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D15",
                    "label": "2 - Progressing",
                    "text": "Identifies new opportunities when they arise and takes action in a generally timely manner, though may hesitate with unfamiliar or high‑impact situations."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E15",
                    "label": "3 - Practicing",
                    "text": "Identifies and pursues new opportunities when they arise, grasping the major benefits to the organization."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F15",
                    "label": "4 - Advancing",
                    "text": "Quickly and consistently identifies and embraces new opportunities that benefit the organization, driving action to capitalize on opportunities."
                  }
                ]
              },
              {
                "id": "action-oriented-exempt-nxt-3",
                "statement": "Takes on difficult challenges without procrastinating.",
                "sourceCell": "B16",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C16",
                    "label": "1 - Developing",
                    "text": "Delays taking action on difficult situations or challenges."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D16",
                    "label": "2 - Progressing",
                    "text": "Addresses difficult challenges in a more timely manner and avoids major delays, though may still postpone action when situations feel complex or ambiguous."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E16",
                    "label": "3 - Practicing",
                    "text": "Takes on difficult issues and challenges in a timely manner."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F16",
                    "label": "4 - Advancing",
                    "text": "Acts quickly to address difficult challenges immediately and head-on."
                  }
                ]
              },
              {
                "id": "action-oriented-exempt-nxt-4",
                "statement": "Takes action to resolve problems when they arise.",
                "sourceCell": "B17",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C17",
                    "label": "1 - Developing",
                    "text": "Waits to be told what to do or waits for others to take action to fix the problems."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D17",
                    "label": "2 - Progressing",
                    "text": "Takes initiative to resolve routine problems and begins to act more proactively, though may still rely on others for direction with more complex issues."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E17",
                    "label": "3 - Practicing",
                    "text": "Takes the initiative to fix the problems that arise."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F17",
                    "label": "4 - Advancing",
                    "text": "Persistently stays involved in the actions needed to ensure problems are resolved as quickly as possible."
                  }
                ]
              }
            ]
          },
          "people_leader": {
            "sourceLabel": "People Leader",
            "sourceHeaderCell": "B19",
            "behaviors": [
              {
                "id": "action-oriented-people-leader-1",
                "statement": "Drives others to take timely action.",
                "sourceCell": "B21",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C21",
                    "label": "1 - Developing",
                    "text": "Neglects the need to push others to take action in a timely manner."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D21",
                    "label": "2 - Progressing",
                    "text": "Helps keep others on task but doesn't always deliver in a timely manner."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E21",
                    "label": "3 - Practicing",
                    "text": "Keeps others on task and helps them see the benefits of taking timely action."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F21",
                    "label": "4 - Advancing",
                    "text": "Creates a sense of urgency in others to take action in a timely manner."
                  }
                ]
              },
              {
                "id": "action-oriented-people-leader-2",
                "statement": "Identifies and seizes new opportunities that benefit the business.",
                "sourceCell": "B22",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C22",
                    "label": "1 - Developing",
                    "text": "Rarely identifies new business opportunities or may delay too long in seizing new opportunities that could benefit the business."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D22",
                    "label": "2 - Progressing",
                    "text": "Tries to identify new business opportunities."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E22",
                    "label": "3 - Practicing",
                    "text": "Takes action to secure new and effective business opportunities."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F22",
                    "label": "4 - Advancing",
                    "text": "Swiftly takes action to seize new and highly successful business opportunities."
                  }
                ]
              },
              {
                "id": "action-oriented-people-leader-3",
                "statement": "Instills a can-do attitude in others.",
                "sourceCell": "B23",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C23",
                    "label": "1 - Developing",
                    "text": "Allows others to maintain a reluctant attitude or a doubt in their ability to accomplish tasks."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D23",
                    "label": "2 - Progressing",
                    "text": "Motivates others to have a can-do attitude in certain situations."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E23",
                    "label": "3 - Practicing",
                    "text": "Encourages a can-do attitude in others when situations arise."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F23",
                    "label": "4 - Advancing",
                    "text": "Fosters an environment where everyone takes on a can-do attitude."
                  }
                ]
              },
              {
                "id": "action-oriented-people-leader-4",
                "statement": "Pushes team or others to take action on new challenges.",
                "sourceCell": "B24",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C24",
                    "label": "1 - Developing",
                    "text": "Misses opportunities or is reluctant to push others to take action on new challenges."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D24",
                    "label": "2 - Progressing",
                    "text": "Occasionally seizes opportunities to push others to take on new challenges."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E24",
                    "label": "3 - Practicing",
                    "text": "Pushes others to take on new challenges."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F24",
                    "label": "4 - Advancing",
                    "text": "Helps others see the benefits of taking the initiative and creates new challenges for them to take on."
                  }
                ]
              }
            ]
          },
          "senior_leader": {
            "sourceLabel": "Senior Leader",
            "sourceHeaderCell": "B26",
            "behaviors": [
              {
                "id": "action-oriented-senior-leader-1",
                "statement": "Builds an environment that emphasizes taking initiative and acting quickly.",
                "sourceCell": "B28",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C28",
                    "label": "1 - Developing",
                    "text": "Creates a highly bureaucratic culture that inhibits decisions and action; may criticize others for acting too quickly in ways that stifle initiative."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D28",
                    "label": "2 - Progressing",
                    "text": "Encourages others to move quickly and occasionally removes the barriers and risks for taking the initiative."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E28",
                    "label": "3 - Practicing",
                    "text": "Rewards others for moving quickly and removes the barriers and risks for taking the initiative."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F28",
                    "label": "4 - Advancing",
                    "text": "Creates and nurtures a culture where others are supported and rewarded for acting quickly."
                  }
                ]
              },
              {
                "id": "action-oriented-senior-leader-2",
                "statement": "Models the enthusiasm and can-do attitude for the organization.",
                "sourceCell": "B29",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C29",
                    "label": "1 - Developing",
                    "text": "Struggles to maintain the level of positive energy needed to build a can-do attitude in the organization."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D29",
                    "label": "2 - Progressing",
                    "text": "Has a good level of energy and commitment but struggles during challenging situations."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E29",
                    "label": "3 - Practicing",
                    "text": "Maintains a high level of energy and commitment that encourages a can-do attitude in others."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F29",
                    "label": "4 - Advancing",
                    "text": "Consistently maintains energy levels and commitment in even the most challenging times to create a can-do culture throughout the organization."
                  }
                ]
              },
              {
                "id": "action-oriented-senior-leader-3",
                "statement": "Helps the organization respond quickly to opportunities.",
                "sourceCell": "B30",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C30",
                    "label": "1 - Developing",
                    "text": "Pays little attention to trends, and when new opportunities arise, reacts in a slow and deliberate manner, often missing the opportunity."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D30",
                    "label": "2 - Progressing",
                    "text": "Pays attention to trends and reacts in a somewhat timely manner."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E30",
                    "label": "3 - Practicing",
                    "text": "Identifies and pursues new business opportunities for the organization."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F30",
                    "label": "4 - Advancing",
                    "text": "Maintains a constant vigilance for opportunities and takes rapid action to seize them for the organization."
                  }
                ]
              },
              {
                "id": "action-oriented-senior-leader-4",
                "statement": "Leads the organization on bold challenges.",
                "sourceCell": "B31",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C31",
                    "label": "1 - Developing",
                    "text": "Resists taking on challenges for the organization that might be difficult for it to meet."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D31",
                    "label": "2 - Progressing",
                    "text": "Occasionally takes on challenges for the organization, but hesitates on challenges that are difficult to meet."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E31",
                    "label": "3 - Practicing",
                    "text": "Leads the organization on new and challenging initiatives."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F31",
                    "label": "4 - Advancing",
                    "text": "Fosters a sense of adventure within the organization by taking on great and bold challenges."
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "id": "self-development",
        "name": "Self-Development",
        "sourceSheet": "Self Development",
        "definition": "Actively seeking new ways to grow and be challenged using both formal and informal development channels.",
        "definitionSourceCell": "B2",
        "group": "core",
        "roles": {
          "nxs": {
            "sourceLabel": "Non-Exempt Step",
            "sourceHeaderCell": "B5",
            "behaviors": [
              {
                "id": "self-development-nxs-1",
                "statement": "Asks for help with personal development efforts.",
                "sourceCell": "B7",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C7",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Avoids seeking help for self- development efforts, missing potential learning opportunities."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D7",
                    "label": "2 - Meets Expectations",
                    "text": "Seeks guidance from the right people to identify development priorities and useful opportunities and resources for continuous learning."
                  }
                ]
              },
              {
                "id": "self-development-nxs-2",
                "statement": "Pursues ways to develop new skills.",
                "sourceCell": "B8",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C8",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Rarely pursues ways to develop new skills; may wait for others to initiate or resist change."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D8",
                    "label": "2 - Meets Expectations",
                    "text": "Actively pursues a range of opportunities to develop new skills, including assignments, classes, and mentoring."
                  }
                ]
              },
              {
                "id": "self-development-nxs-3",
                "statement": "Seeks opportunities to acquire new knowledge and skills.",
                "sourceCell": "B9",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C9",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Relies on current knowledge, skills, and abilities; shows little interest in expanding horizons."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D9",
                    "label": "2 - Meets Expectations",
                    "text": "Takes advantage of opportunities to continuously update knowledge, skills, and abilities."
                  }
                ]
              },
              {
                "id": "self-development-nxs-4",
                "statement": "Seeks opportunities to apply new skills on the job.",
                "sourceCell": "B10",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C10",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Rarely pursues opportunities to apply new skills on the job; may prefer the status quo."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D10",
                    "label": "2 - Meets Expectations",
                    "text": "Actively seeks opportunities to practice, apply, and strengthen new skills on the job."
                  }
                ]
              }
            ]
          },
          "exempt_nxt": {
            "sourceLabel": "Exempt & Non-Exempt Traditional",
            "sourceHeaderCell": "B12",
            "behaviors": [
              {
                "id": "self-development-exempt-nxt-1",
                "statement": "Seeks feedback on areas to develop.",
                "sourceCell": "B14",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C14",
                    "label": "1 - Developing",
                    "text": "Avoids seeking feedback about what areas to develop, relying on own opinion."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D14",
                    "label": "2 - Progressing",
                    "text": "Selectively gathers feedback about where to focus self-development efforts"
                  },
                  {
                    "value": 3,
                    "sourceCell": "E14",
                    "label": "3 - Practicing",
                    "text": "Gathers feedback about where to focus own development efforts."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F14",
                    "label": "4 - Advancing",
                    "text": "Actively seeks feedback from people with various perspectives to identify priorities for self- development."
                  }
                ]
              },
              {
                "id": "self-development-exempt-nxt-2",
                "statement": "Identifies clear development goals and tactics.",
                "sourceCell": "B15",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C15",
                    "label": "1 - Developing",
                    "text": "Struggles to articulate development goals and tactics; may lack clarity about focus areas or not know how to achieve them."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D15",
                    "label": "2 - Progressing",
                    "text": "Creates a development plan but lacks clarity around the tactics on how to achieve the goals."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E15",
                    "label": "3 - Practicing",
                    "text": "Creates a development plan that states clear goals and the tactics to achieve them."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F15",
                    "label": "4 - Advancing",
                    "text": "Creates a thorough and detailed development plan that states clear goals and the practical steps and tactics needed to achieve them."
                  }
                ]
              },
              {
                "id": "self-development-exempt-nxt-3",
                "statement": "Takes initiative to practice and apply new knowledge and skills.",
                "sourceCell": "B16",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C16",
                    "label": "1 - Developing",
                    "text": "Does work without looking for ways to develop or apply new knowledge and skills."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D16",
                    "label": "2 - Progressing",
                    "text": "Occasionally makes an effort to apply new knowledge and skills on the job."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E16",
                    "label": "3 - Practicing",
                    "text": "Makes an effort to develop and apply new knowledge and skills on the job."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F16",
                    "label": "4 - Advancing",
                    "text": "Demonstrates a strong commitment to development by regularly practicing and applying knowledge and skills; is quick to share new learning with others."
                  }
                ]
              },
              {
                "id": "self-development-exempt-nxt-4",
                "statement": "Seeks additional job responsibilities to broaden skills.",
                "sourceCell": "B17",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C17",
                    "label": "1 - Developing",
                    "text": "Avoids additional job responsibilities that could broaden skills; may be content with current skill set."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D17",
                    "label": "2 - Progressing",
                    "text": "Occasionally accepts additional job responsibilities but may be content with utilizing current skill set."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E17",
                    "label": "3 - Practicing",
                    "text": "Shows interest in assuming additional job responsibilities to broaden skills."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F17",
                    "label": "4 - Advancing",
                    "text": "Takes initiative to broaden skills through additional job responsibilities and challenging assignments."
                  }
                ]
              }
            ]
          },
          "people_leader": {
            "sourceLabel": "People Leader",
            "sourceHeaderCell": "B19",
            "behaviors": [
              {
                "id": "self-development-people-leader-1",
                "statement": "Aligns own development plans with the goals and values of the organization.",
                "sourceCell": "B21",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C21",
                    "label": "1 - Developing",
                    "text": "Creates a development plan that lacks alignment with the goals or values of the organization; may prioritize own goals or interests."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D21",
                    "label": "2 - Progressing",
                    "text": "Creates a development plan that occasionally aligns with the priorities of the organzation."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E21",
                    "label": "3 - Practicing",
                    "text": "Creates development plans that are aligned with the priorities and values of the organization."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F21",
                    "label": "4 - Advancing",
                    "text": "Carefully aligns own development plans and career aspirations with the goals and values of the organization; pursues ways to both enhance skills and advance organizational strategy."
                  }
                ]
              },
              {
                "id": "self-development-people-leader-2",
                "statement": "Continuously improves own leadership capabilities.",
                "sourceCell": "B22",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C22",
                    "label": "1 - Developing",
                    "text": "Puts little effort into enhancing own leadership skills."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D22",
                    "label": "2 - Progressing",
                    "text": "Occasionally takes action to enhance own leadership skills."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E22",
                    "label": "3 - Practicing",
                    "text": "Takes actions to continuously enhance own leadership skills."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F22",
                    "label": "4 - Advancing",
                    "text": "Consistently works to enhance own leadership skills, expanding capability to lead people and teams in many challenging contexts."
                  }
                ]
              },
              {
                "id": "self-development-people-leader-3",
                "statement": "Models personal development by continuously expanding own knowledge and skills.",
                "sourceCell": "B23",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C23",
                    "label": "1 - Developing",
                    "text": "Gives low priority to development efforts for self or the team."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D23",
                    "label": "2 - Progressing",
                    "text": "Takes limited initiative to practice and apply new knowledge and skills."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E23",
                    "label": "3 - Practicing",
                    "text": "Demonstrates commitment to own development and encourages others to expand their expertise and skills."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F23",
                    "label": "4 - Advancing",
                    "text": "Actively pursues opportunities that expand own expertise and skills and motivates the team to continuously learn and develop."
                  }
                ]
              },
              {
                "id": "self-development-people-leader-4",
                "statement": "Pursues challenging assignments and career opportunities that stretch and build own \ncapabilities",
                "sourceCell": "B24",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C24",
                    "label": "1 - Developing",
                    "text": "Shows little interest in challenging assignments or career opportunities, missing the chance to build new capabilities."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D24",
                    "label": "2 - Progressing",
                    "text": "Occasionally takes on stretch assignments; shows some interest in challenging assignments."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E24",
                    "label": "3 - Practicing",
                    "text": "Takes on stretch assignments and career opportunities that will broaden capabilities."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F24",
                    "label": "4 - Advancing",
                    "text": "Assertively pursues challenging assignments and takes charge of initiatives that will broaden own capabilities, maximize contribution, and enhance career success."
                  }
                ]
              }
            ]
          },
          "senior_leader": {
            "sourceLabel": "Senior Leader",
            "sourceHeaderCell": "B26",
            "behaviors": [
              {
                "id": "self-development-senior-leader-1",
                "statement": "Anticipates how changes in the organization or industry may impact own developmental needs.",
                "sourceCell": "B28",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C28",
                    "label": "1 - Developing",
                    "text": "Identifies personal development needs irrespective of changing dynamics in the organization or industry."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D28",
                    "label": "2 - Progressing",
                    "text": "Occasionally considers organization and industry dynamics when creating own development plan."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E28",
                    "label": "3 - Practicing",
                    "text": "Considers organization and industry dynamics when creating own development plan."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F28",
                    "label": "4 - Advancing",
                    "text": "Monitors changes in the organization and industry and considers implications for own development needs; makes plans to capitalize on upcoming opportunities."
                  }
                ]
              },
              {
                "id": "self-development-senior-leader-2",
                "statement": "Continuously improves own leadership skills and abilities.",
                "sourceCell": "B29",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C29",
                    "label": "1 - Developing",
                    "text": "Puts minimal effort into enhancing own leadership skills."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D29",
                    "label": "2 - Progressing",
                    "text": "Puts effort into enhancing own leadership capabilies."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E29",
                    "label": "3 - Practicing",
                    "text": "Takes steps to continuously enhance own leadership capabilities."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F29",
                    "label": "4 - Advancing",
                    "text": "Consistently works to improve own leadership skills, expanding ability to effectively lead the organization."
                  }
                ]
              },
              {
                "id": "self-development-senior-leader-3",
                "statement": "Shapes an organizational culture that supports personal development.",
                "sourceCell": "B30",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C30",
                    "label": "1 - Developing",
                    "text": "Does little to build a culture that fosters individual or career development."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D30",
                    "label": "2 - Progressing",
                    "text": "Puts some effort into building a culture that fosters individual and career development."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E30",
                    "label": "3 - Practicing",
                    "text": "Creates a culture that fosters individual and career development."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F30",
                    "label": "4 - Advancing",
                    "text": "Creates an organizational culture that strongly values and accelerates individual and career development."
                  }
                ]
              },
              {
                "id": "self-development-senior-leader-4",
                "statement": "Pursues challenging assignments and career opportunities that build own capabilities.",
                "sourceCell": "B31",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C31",
                    "label": "1 - Developing",
                    "text": "Shows little interest in challenging assignments or career opportunities, missing the chance to build new capabilities."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D31",
                    "label": "2 - Progressing",
                    "text": "Occasionally takes on stretch assignments; shows some interest in challenging assignments."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E31",
                    "label": "3 - Practicing",
                    "text": "Takes on stretch assignments and career opportunities that will broaden capabilities."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F31",
                    "label": "4 - Advancing",
                    "text": "Assertively pursues challenging assignments and takes charge of initiatives that will broaden own capabilities, maximize contribution, and enhance career success."
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "id": "communicates-effectively",
        "name": "Communicates Effectively",
        "sourceSheet": "Communicates Effectively",
        "definition": "Developing and delivering multi-mode communications that convey a clear understanding of the unique needs of different audiences.",
        "definitionSourceCell": "B2",
        "group": "core",
        "roles": {
          "nxs": {
            "sourceLabel": "Non-Exempt Step",
            "sourceHeaderCell": "B5",
            "behaviors": [
              {
                "id": "communicates-effectively-nxs-1",
                "statement": "Keeps others informed.",
                "sourceCell": "B7",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C7",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Retains important information that should be shared with others."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D7",
                    "label": "2 - Meets Expectations",
                    "text": "Promptly and proactively shares relevant information, considering what others want and need to know."
                  }
                ]
              },
              {
                "id": "communicates-effectively-nxs-2",
                "statement": "Listens attentively to others’ insights, advice, and instruction.",
                "sourceCell": "B8",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C8",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Shows little interest or limited comprehension of the insights, advice, or instruction provided."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D8",
                    "label": "2 - Meets Expectations",
                    "text": "Listens attentively to others’ insights, advice, and instruction, grasps the main points, and asks questions to clarify further."
                  }
                ]
              },
              {
                "id": "communicates-effectively-nxs-3",
                "statement": "Responds openly to others.",
                "sourceCell": "B9",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C9",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Appears closed off and disinterested in others’ perspectives or ideas."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D9",
                    "label": "2 - Meets Expectations",
                    "text": "Takes an interest in and proactively seeks out others’ ideas and perspectives."
                  }
                ]
              },
              {
                "id": "communicates-effectively-nxs-4",
                "statement": "Speaks with an appropriate amount of detail.",
                "sourceCell": "B10",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C10",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Communicates in either an overly wordy or overly succinct manner."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D10",
                    "label": "2 - Meets Expectations",
                    "text": "Provides the appropriate amount of context and detail when speaking."
                  }
                ]
              }
            ]
          },
          "exempt_nxt": {
            "sourceLabel": "Exempt & Non-Exempt Traditional",
            "sourceHeaderCell": "B12",
            "behaviors": [
              {
                "id": "communicates-effectively-exempt-nxt-1",
                "statement": "Clear, concise, and professional in communication.",
                "sourceCell": "B14",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C14",
                    "label": "1 - Developing",
                    "text": "Expresses self in a rambling or unclear manner."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D14",
                    "label": "2 - Progressing",
                    "text": "Inconsistenly conveys information clearly and professionally; wordy or unclear at times."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E14",
                    "label": "3 - Practicing",
                    "text": "Conveys information clearly, concisely, and professionally."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F14",
                    "label": "4 - Advancing",
                    "text": "Delivers even highly complex information in a polished, precise, and compelling manner."
                  }
                ]
              },
              {
                "id": "communicates-effectively-exempt-nxt-2",
                "statement": "Listens with interest to what others have to say.",
                "sourceCell": "B15",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C15",
                    "label": "1 - Developing",
                    "text": "Shows insufficient regard for others’ comments; may interrupt people or otherwise signal disinterest."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D15",
                    "label": "2 - Progressing",
                    "text": "Listens to others with increasing attentiveness and attempts to understand their perspectives; may still interrupt occasionally."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E15",
                    "label": "3 - Practicing",
                    "text": "Listens attentively to others and takes an interest in what they have to say."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F15",
                    "label": "4 - Advancing",
                    "text": "Exhibits verbal and non-verbal behaviors that indicate a deep interest in others’ comments."
                  }
                ]
              },
              {
                "id": "communicates-effectively-exempt-nxt-3",
                "statement": "Shares information and updates with others as needed.",
                "sourceCell": "B16",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C16",
                    "label": "1 - Developing",
                    "text": "Holds onto information that should be shared or communicates information too selectively."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D16",
                    "label": "2 - Progressing",
                    "text": "Makes increasing efforts to keep others informed; shares relevant information in most situations but may still miss opportunities to proactively communicate."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E16",
                    "label": "3 - Practicing",
                    "text": "Consistently endeavors to keep others well informed."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F16",
                    "label": "4 - Advancing",
                    "text": "Acts as a source of information; proactively disseminates knowledge, insights, and updates."
                  }
                ]
              },
              {
                "id": "communicates-effectively-exempt-nxt-4",
                "statement": "Is clear and thorough in reports, documentation, and other written information.",
                "sourceCell": "B17",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C17",
                    "label": "1 - Developing",
                    "text": "Provides few written reports of critical actions; offers only meager or unclear documentation."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D17",
                    "label": "2 - Progressing",
                    "text": "Provides written information with improving clarity and completeness; documentation generally meets expectations but may still lack full detail or polish."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E17",
                    "label": "3 - Practicing",
                    "text": "Documents efforts appropriately and provides clear written information."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F17",
                    "label": "4 - Advancing",
                    "text": "Creates rich documents and reports that skillfully and completely deliver the necessary information to stakeholders."
                  }
                ]
              }
            ]
          },
          "people_leader": {
            "sourceLabel": "People Leader",
            "sourceHeaderCell": "B19",
            "behaviors": [
              {
                "id": "communicates-effectively-people-leader-1",
                "statement": "Adjusts communication content and style to the audience and a diverse set of stakeholders.",
                "sourceCell": "B21",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C21",
                    "label": "1 - Developing",
                    "text": "Applies the same communication style, regardless of the audience."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D21",
                    "label": "2 - Progressing",
                    "text": "Occasionally tailors communication content to the needs of others."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E21",
                    "label": "3 - Practicing",
                    "text": "Tailors communication content and style to the needs of others."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F21",
                    "label": "4 - Advancing",
                    "text": "Engages diverse audiences and stakeholders by communicating in a way that matches their preferences."
                  }
                ]
              },
              {
                "id": "communicates-effectively-people-leader-2",
                "statement": "Breaks down communication barriers between others.",
                "sourceCell": "B22",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C22",
                    "label": "1 - Developing",
                    "text": "Allows communication barriers to remain in place; overlooks chances to address tough communication issues."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D22",
                    "label": "2 - Progressing",
                    "text": "Takes few steps to ensure communication between individuals and teams; occasionally struggles with addressing tough communication issues."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E22",
                    "label": "3 - Practicing",
                    "text": "Takes steps to ensure effective communication between individuals and teams."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F22",
                    "label": "4 - Advancing",
                    "text": "Swiftly removes barriers to communication and ensures strong dialogue between individuals and teams."
                  }
                ]
              },
              {
                "id": "communicates-effectively-people-leader-3",
                "statement": "Encourages candid and open communication among groups.",
                "sourceCell": "B23",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C23",
                    "label": "1 - Developing",
                    "text": "Acts in ways that inhibit open communication; reacts negatively to differing views or otherwise resists candid dialogue."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D23",
                    "label": "2 - Progressing",
                    "text": "Encourages people to speak freely but occasionally reacts negatively to differing views."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E23",
                    "label": "3 - Practicing",
                    "text": "Urges people to speak freely and shows sufficient openness to differing viewpoints within and beyond the team."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F23",
                    "label": "4 - Advancing",
                    "text": "Regularly solicits a wide range of perspectives and seeks candid input, both within and beyond the team."
                  }
                ]
              },
              {
                "id": "communicates-effectively-people-leader-4",
                "statement": "Practices active and attentive listening skills to verify understanding",
                "sourceCell": "B24",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C24",
                    "label": "1 - Developing",
                    "text": "Demonstrates poor or inconsistent listening skills; takes few steps to ensure mutual understanding."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D24",
                    "label": "2 - Progressing",
                    "text": "Takes steps to seek mutual understanding."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E24",
                    "label": "3 - Practicing",
                    "text": "Pays attention to others’ input and perspectives; ask questions and summarizes input to confirm understanding."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F24",
                    "label": "4 - Advancing",
                    "text": "Gives close attention to others’ comments; probes beneath the surface to gain richer insight."
                  }
                ]
              }
            ]
          },
          "senior_leader": {
            "sourceLabel": "Senior Leader",
            "sourceHeaderCell": "B26",
            "behaviors": [
              {
                "id": "communicates-effectively-senior-leader-1",
                "statement": "Creates venues for constructive dialogue within the organization.",
                "sourceCell": "B28",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C28",
                    "label": "1 - Developing",
                    "text": "Builds insufficient or ineffective forums for people to share their views and ideas openly."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D28",
                    "label": "2 - Progressing",
                    "text": "Takes few steps to create forums where people can express themselves openly."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E28",
                    "label": "3 - Practicing",
                    "text": "Takes steps to create forums where people can express themselves openly and regularly."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F28",
                    "label": "4 - Advancing",
                    "text": "Creates multiple methods and venues to facilitate constructive and ongoing dialogue within the organization."
                  }
                ]
              },
              {
                "id": "communicates-effectively-senior-leader-2",
                "statement": "Demonstrates candor and openness when discussing major organizational initiatives.",
                "sourceCell": "B29",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C29",
                    "label": "1 - Developing",
                    "text": "Speaks in an unclear, untimely, inaccurate, or overly cautious way about major initiatives."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D29",
                    "label": "2 - Progressing",
                    "text": "Explains major initiatives in an accurate way but may still struggle with caution and clarity."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E29",
                    "label": "3 - Practicing",
                    "text": "Explains major initiatives in a candid, timely, and appropriate manner."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F29",
                    "label": "4 - Advancing",
                    "text": "Proactively discusses major initiatives in a thoughtful, forthright way that builds interest and commitment."
                  }
                ]
              },
              {
                "id": "communicates-effectively-senior-leader-3",
                "statement": "Communicates effectively to a wide variety of audiences at all organizational levels.",
                "sourceCell": "B30",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C30",
                    "label": "1 - Developing",
                    "text": "Struggles to communicate with some audiences; may be effective with certain groups or levels, but less articulate or engaging with others."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D30",
                    "label": "2 - Progressing",
                    "text": "Delivers messages effecively to some groups."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E30",
                    "label": "3 - Practicing",
                    "text": "Delivers messages effectively to groups ranging from frontline workers to senior executives."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F30",
                    "label": "4 - Advancing",
                    "text": "Demonstrates a strong impact and a compelling style in front of people at all levels."
                  }
                ]
              },
              {
                "id": "communicates-effectively-senior-leader-4",
                "statement": "Promotes a free flow of information throughout the organization (e.g., upward, downward and across)",
                "sourceCell": "B31",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C31",
                    "label": "1 - Developing",
                    "text": "Acts in ways that discourage or hamper the flow of communication throughout the organization."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D31",
                    "label": "2 - Progressing",
                    "text": "Occasionally takes steps to ensure a free flow of information throughout the organization."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E31",
                    "label": "3 - Practicing",
                    "text": "Takes steps to ensure a free flow of information throughout the organization."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F31",
                    "label": "4 - Advancing",
                    "text": "Actively promotes and consistently drives a free flow of information across all levels of the organization."
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "id": "customer-focus",
        "name": "Customer Focus",
        "sourceSheet": "Customer Focus",
        "definition": "Building strong customer relationships and delivering customer-centric solutions.",
        "definitionSourceCell": "B2",
        "group": "core",
        "roles": {
          "nxs": {
            "sourceLabel": "Non-Exempt",
            "sourceHeaderCell": "B5",
            "behaviors": [
              {
                "id": "customer-focus-nxs-1",
                "statement": "Seeks to understand the reasons for customers’ choices",
                "sourceCell": "B7",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C7",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Overlooks the reasons for customers’ choices; makes assumptions about their decision making process"
                  },
                  {
                    "value": 2,
                    "sourceCell": "D7",
                    "label": "2 - Meets Expectations",
                    "text": "Works to understand what guides customers’ choices and probes beyond the obvious to identify the factors influencing their decisions."
                  }
                ]
              },
              {
                "id": "customer-focus-nxs-2",
                "statement": "Asks questions to accurately identify customer needs",
                "sourceCell": "B8",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C8",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Asks few questions to determine customer needs, or poses questions that are off-base and \nprovide little insight"
                  },
                  {
                    "value": 2,
                    "sourceCell": "D8",
                    "label": "2 - Meets Expectations",
                    "text": "Asks thoughtful, probing questions to accurately identify both obvious and less apparent customer needs and expectations."
                  }
                ]
              },
              {
                "id": "customer-focus-nxs-3",
                "statement": "Prioritizes work based on customer requests.",
                "sourceCell": "B9",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C9",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Places no particular priority on customer requests; may treat customer issues with insufficient urgency"
                  },
                  {
                    "value": 2,
                    "sourceCell": "D9",
                    "label": "2 - Meets Expectations",
                    "text": "Responds to customer requests with urgency and connects with others to ensure the best possible outcomes."
                  }
                ]
              },
              {
                "id": "customer-focus-nxs-4",
                "statement": "Meets customer requirements",
                "sourceCell": "B10",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C10",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Does work that falls shy of customer requirements, resulting in unsatisfactory service."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D10",
                    "label": "2 - Meets Expectations",
                    "text": "Understands customer requirements, delivers effectively, and strives to surpass expectations."
                  }
                ]
              }
            ]
          },
          "exempt_nxt": {
            "sourceLabel": "Exempt & Non-Exempt Traditional",
            "sourceHeaderCell": "B12",
            "behaviors": [
              {
                "id": "customer-focus-exempt-nxt-1",
                "statement": "Searches for ways to improve customer service.",
                "sourceCell": "B14",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C14",
                    "label": "1 - Developing",
                    "text": "Takes few steps to improve customer service; may rely too much on existing systems and approaches."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D14",
                    "label": "2 - Progressing",
                    "text": "Investigates and applies some ways to improve customer service; may still rely on existing processes in certain situations."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E14",
                    "label": "3 - Practicing",
                    "text": "Investigates and applies some ways to improve customer service."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F14",
                    "label": "4 - Advancing",
                    "text": "Regularly assesses customer service levels and identifies creative, viable ways to drive substantial improvement."
                  }
                ]
              },
              {
                "id": "customer-focus-exempt-nxt-2",
                "statement": "Follows up with customers to ensure problems are solved.",
                "sourceCell": "B15",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C15",
                    "label": "1 - Developing",
                    "text": "Misses opportunities to follow up to ensure that customer problems are solved."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D15",
                    "label": "2 - Progressing",
                    "text": "Occasionally keeps in contact with customers to ask if problems have been resolved; misses some opportunities to follow up."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E15",
                    "label": "3 - Practicing",
                    "text": "Keeps in contact with customers and asks if problems have been resolved."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F15",
                    "label": "4 - Advancing",
                    "text": "Maintains open channels of communication with customers; ensures that problems have been resolved to customers’ full satisfaction."
                  }
                ]
              },
              {
                "id": "customer-focus-exempt-nxt-3",
                "statement": "Independently anticipates and meets customer needs",
                "sourceCell": "B16",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C16",
                    "label": "1 - Developing",
                    "text": "Overlooks emerging customer needs and struggles to \naccommodate their new priorities or expectations"
                  },
                  {
                    "value": 2,
                    "sourceCell": "D16",
                    "label": "2 - Progressing",
                    "text": "Looks ahead to identify some emerging customer needs; may still overlook subtle shifts in expectations."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E16",
                    "label": "3 - Practicing",
                    "text": "Looks to the future and determines most emerging customer needs; determines appropriate responses."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F16",
                    "label": "4 - Advancing",
                    "text": "Forecasts even subtle changes in customer priorities and expectations; makes regular efforts to adjust approach to ensure needs are always met"
                  }
                ]
              },
              {
                "id": "customer-focus-exempt-nxt-4",
                "statement": "Internalizes customer feedback and provides innovative ideas to meet their future needs",
                "sourceCell": "B17",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C17",
                    "label": "1 - Developing",
                    "text": "Gives customer feedback little consideration and provides few ideas to meet future needs."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D17",
                    "label": "2 - Progressing",
                    "text": "Takes customer feedback into consideration and occasionally uses it to determine new ideas."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E17",
                    "label": "3 - Practicing",
                    "text": "Studies customer feedback and uses it to determine some creative new ideas."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F17",
                    "label": "4 - Advancing",
                    "text": "Digs deeply into customer feedback and drives the innovations that can enable the organization to better meet their future needs."
                  }
                ]
              }
            ]
          },
          "people_leader": {
            "sourceLabel": "People Leader",
            "sourceHeaderCell": "B19",
            "behaviors": [
              {
                "id": "customer-focus-people-leader-1",
                "statement": "Addresses gaps in the workgroup’s ability to meet emerging customer needs.",
                "sourceCell": "B21",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C21",
                    "label": "1 - Developing",
                    "text": "Takes few or ineffective steps to resolve gaps in the workgroup’s ability to meet emerging customer needs."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D21",
                    "label": "2 - Progressing",
                    "text": "Takes steps to resolve gaps in the workgroup's ability to meet emerging customer needs."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E21",
                    "label": "3 - Practicing",
                    "text": "Diagnoses gaps in the workgroup’s ability to meet emerging customer needs and takes action to remedy these issues."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F21",
                    "label": "4 - Advancing",
                    "text": "Stays attuned to emerging customer needs and ensures that gaps in workgroup’s abilities are addressed before they become a problem."
                  }
                ]
              },
              {
                "id": "customer-focus-people-leader-2",
                "statement": "Gathers customer satisfaction input on behalf of the team.",
                "sourceCell": "B22",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C22",
                    "label": "1 - Developing",
                    "text": "Makes limited efforts to obtain customer feedback or data; may remain unaware of customers’ views."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D22",
                    "label": "2 - Progressing",
                    "text": "Makes effort to obtain customer feedback or data."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E22",
                    "label": "3 - Practicing",
                    "text": "Solicits customer feedback and data; conveys a clear understanding of the level of service the team is providing."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F22",
                    "label": "4 - Advancing",
                    "text": "Probes into customer feedback and data; uses this input to drive continuous improvement."
                  }
                ]
              },
              {
                "id": "customer-focus-people-leader-3",
                "statement": "Holds others accountable for meeting customer needs.",
                "sourceCell": "B23",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C23",
                    "label": "1 - Developing",
                    "text": "Misses opportunities to create a feeling of accountability toward the customer; may ignore complaints or handle too many customer issues on their own."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D23",
                    "label": "2 - Progressing",
                    "text": "Delivers clear messages about providing a strong level of service to customers; struggles to take action when team members do not meet standards."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E23",
                    "label": "3 - Practicing",
                    "text": "Delivers clear messages about providing a strong level of service to customers; takes action when team members do not meet standards."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F23",
                    "label": "4 - Advancing",
                    "text": "Creates an environment in which team members feel a strong sense of ownership and accountability toward creating the best possible customer experience."
                  }
                ]
              },
              {
                "id": "customer-focus-people-leader-4",
                "statement": "Aligns business processes to work with those of customers.",
                "sourceCell": "B24",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C24",
                    "label": "1 - Developing",
                    "text": "Creates or preserves business processes that do not align with those of customers."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D24",
                    "label": "2 - Progressing",
                    "text": "Occasionally takes few steps to align the business processes with those of customers."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E24",
                    "label": "3 - Practicing",
                    "text": "Takes steps to align the business processes with those of customers."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F24",
                    "label": "4 - Advancing",
                    "text": "Skillfully aligns and integrates organizational processes with those of customers, leading to substantial improvements in service."
                  }
                ]
              }
            ]
          },
          "senior_leader": {
            "sourceLabel": "Senior Leader",
            "sourceHeaderCell": "B26",
            "behaviors": [
              {
                "id": "customer-focus-senior-leader-1",
                "statement": "Creates a sense of urgency throughout the organization on the importance of meeting customer needs.",
                "sourceCell": "B28",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C28",
                    "label": "1 - Developing",
                    "text": "Places limited emphasis on the importance of providing excellent service; misses opportunities to build excitement or urgency toward meeting customer needs."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D28",
                    "label": "2 - Progressing",
                    "text": "Emphasises the importance of providing excellent service; fosters some sense of urgency toward customer needs."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E28",
                    "label": "3 - Practicing",
                    "text": "Speaks clearly about the importance of the customer; fosters a sense of urgency toward customer needs."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F28",
                    "label": "4 - Advancing",
                    "text": "Champions the needs of customers; energizes people to provide outstanding service."
                  }
                ]
              },
              {
                "id": "customer-focus-senior-leader-2",
                "statement": "Ensures that organizational resources and support are focused on meeting customer needs.",
                "sourceCell": "B29",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C29",
                    "label": "1 - Developing",
                    "text": "Provides limited or insufficient organizational resources and support to meet current or emerging customer needs."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D29",
                    "label": "2 - Progressing",
                    "text": "Occasionally provides or seeks organizational resources to meet current customer needs."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E29",
                    "label": "3 - Practicing",
                    "text": "Secures appropriate organizational resources and support to meet current customer needs."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F29",
                    "label": "4 - Advancing",
                    "text": "Consistently ensures that resources are in place to deliver on both current and emerging customer needs."
                  }
                ]
              },
              {
                "id": "customer-focus-senior-leader-3",
                "statement": "Establishes organizational alliances or partnerships with key customers.",
                "sourceCell": "B30",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C30",
                    "label": "1 - Developing",
                    "text": "Remains overly removed from key customers; seldom interacts with them regularly and shows limited awareness of their needs."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D30",
                    "label": "2 - Progressing",
                    "text": "Creates and maintains effective partnerships with some customers; shows awareness of their needs."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E30",
                    "label": "3 - Practicing",
                    "text": "Creates and maintains effective partnerships with customers; identifies some ways to build and strengthen these relationships."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F30",
                    "label": "4 - Advancing",
                    "text": "Builds and cultivates deep partnerships or alliances with many customers; creates new relationships, even while strengthening existing ones."
                  }
                ]
              },
              {
                "id": "customer-focus-senior-leader-4",
                "statement": "Fosters a customer-focused environment.",
                "sourceCell": "B31",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C31",
                    "label": "1 - Developing",
                    "text": "Misses opportunities to create a customer-focused environment; does not make customer satisfaction a high priority."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D31",
                    "label": "2 - Progressing",
                    "text": "Supports efforts to build customer satisfaction; occasionally makes customer satisfaction a priority."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E31",
                    "label": "3 - Practicing",
                    "text": "Supports efforts to build customer satisfaction, loyalty, and commitment."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F31",
                    "label": "4 - Advancing",
                    "text": "Fosters an environment where people are committed to maximizing customer satisfaction, loyalty, and commitment."
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "id": "instills-trust",
        "name": "Instills Trust",
        "sourceSheet": "Instills Trust",
        "definition": "Gaining the confidence and trust of others through honesty, integrity, and authenticity.",
        "definitionSourceCell": "B2",
        "group": "core",
        "roles": {
          "nxs": {
            "sourceLabel": "Non-Exempt",
            "sourceHeaderCell": "B5",
            "behaviors": [
              {
                "id": "instills-trust-nxs-1",
                "statement": "Follows stated policies and practices",
                "sourceCell": "B7",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C7",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "May bend some policies or ignore adhering to some stated practices."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D7",
                    "label": "2 - Meets Expectations",
                    "text": "Acts consistently with organizational policies and practices, even when they are unpopular or inconvenient."
                  }
                ]
              },
              {
                "id": "instills-trust-nxs-2",
                "statement": "Displays consistency between words and deeds.",
                "sourceCell": "B8",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C8",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "At times, may say one thing and do another."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D8",
                    "label": "2 - Meets Expectations",
                    "text": "Builds trust by consistently aligning words and actions across work settings and difficult circumstances."
                  }
                ]
              },
              {
                "id": "instills-trust-nxs-3",
                "statement": "Is honest and direct in dealing with people.",
                "sourceCell": "B9",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C9",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "May be uncomfortable with direct communication, or withhold or shade the truth at times."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D9",
                    "label": "2 - Meets Expectations",
                    "text": "Is consistently open, honest, candid, and direct when working with others, building relationships based on trust."
                  }
                ]
              },
              {
                "id": "instills-trust-nxs-4",
                "statement": "Is reliable; can be counted on to honor agreements and commitments.",
                "sourceCell": "B10",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C10",
                    "label": "1 - Does Not Meet Expectations",
                    "text": "Occasionally overcommits or fails to follow through on agreements or commitments."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D10",
                    "label": "2 - Meets Expectations",
                    "text": "Can be counted on to honor agreements and reliably follow through on commitments."
                  }
                ]
              }
            ]
          },
          "exempt_nxt": {
            "sourceLabel": "Exempt & Non-Exempt Traditional",
            "sourceHeaderCell": "B12",
            "behaviors": [
              {
                "id": "instills-trust-exempt-nxt-1",
                "statement": "Is honest and straightforward when working with others.",
                "sourceCell": "B14",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C14",
                    "label": "1 - Developing",
                    "text": "May withhold or distort the truth at times; may be uncomfortable being direct or appear to have hidden motives"
                  },
                  {
                    "value": 2,
                    "sourceCell": "D14",
                    "label": "2 - Progressing",
                    "text": "Generally communicates truthfully but may still hesitate to be fully direct in uncomfortable situations."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E14",
                    "label": "3 - Practicing",
                    "text": "Builds trust by maintaining an honest and straightforward approach with people"
                  },
                  {
                    "value": 4,
                    "sourceCell": "F14",
                    "label": "4 - Advancing",
                    "text": "Is consistently honest and straightforward when working with others; shares uncomfortable information in a clear and helpful manner"
                  }
                ]
              },
              {
                "id": "instills-trust-exempt-nxt-2",
                "statement": "Honors agreements and commitments, even when working through competing priorities",
                "sourceCell": "B15",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C15",
                    "label": "1 - Developing",
                    "text": "Occasionally overcommits or doesn’t follow through when dealing with competing priorities."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D15",
                    "label": "2 - Progressing",
                    "text": "Makes an effort to follow through on agreements despite competing priorities; fulfills most commitments but may still overextend or occasionally fall short under pressure."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E15",
                    "label": "3 - Practicing",
                    "text": "Instills trust by following through on agreements and commitments despite competing priorities."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F15",
                    "label": "4 - Advancing",
                    "text": "Can be fully counted on to honor agreements and commitments while managing competing \npriorities; puts in extra time and effort when needed."
                  }
                ]
              },
              {
                "id": "instills-trust-exempt-nxt-3",
                "statement": "Shows consistency between words and actions",
                "sourceCell": "B16",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C16",
                    "label": "1 - Developing",
                    "text": "At times, actions do not match words; may not practice what he/she preaches"
                  },
                  {
                    "value": 2,
                    "sourceCell": "D16",
                    "label": "2 - Progressing",
                    "text": "Generally follows through but may still have moments where intentions and behaviors do not fully match."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E16",
                    "label": "3 - Practicing",
                    "text": "Demonstrates consistency between what is said and what is done"
                  },
                  {
                    "value": 4,
                    "sourceCell": "F16",
                    "label": "4 - Advancing",
                    "text": "Is a trusted role model for team members, showing consistency between words and actions in various situations."
                  }
                ]
              },
              {
                "id": "instills-trust-exempt-nxt-4",
                "statement": "Maintains integrity and professional codes of conduct.",
                "sourceCell": "B17",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C17",
                    "label": "1 - Developing",
                    "text": "May overlook or ignore some standards or professional codes of conduct."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D17",
                    "label": "2 - Progressing",
                    "text": "Upholds professional standards in most situations and typically commits to organizational codes of conduct, though occasional lapses in consistency may still occur."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E17",
                    "label": "3 - Practicing",
                    "text": "Demonstrates integrity, upholding professional codes of conduct."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F17",
                    "label": "4 - Advancing",
                    "text": "Establishes a solid reputation for integrity by maintaining high ethical standards and professional codes of conduct."
                  }
                ]
              }
            ]
          },
          "people_leader": {
            "sourceLabel": "People Leader",
            "sourceHeaderCell": "B19",
            "behaviors": [
              {
                "id": "instills-trust-people-leader-1",
                "statement": "Demonstrates consistency between words and actions, gaining others' trust.",
                "sourceCell": "B21",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C21",
                    "label": "1 - Developing",
                    "text": "Actions do not always match words; shows inconsistency in some situations."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D21",
                    "label": "2 - Progressing",
                    "text": "Shows occasional consistency between words and actions, but has not earned full trust within the team."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E21",
                    "label": "3 - Practicing",
                    "text": "Gains trust by showing consistency between what is said and what is done."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F21",
                    "label": "4 - Advancing",
                    "text": "Aligns actions to words and stated values; is widely trusted to demonstrate consistency across a variety of leadership situations."
                  }
                ]
              },
              {
                "id": "instills-trust-people-leader-2",
                "statement": "Models reliability and ensures that the team meets its commitments.",
                "sourceCell": "B22",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C22",
                    "label": "1 - Developing",
                    "text": "Occasionally overcommits, or diminishes the trust of stakeholders when the team is unable to meet commitments."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D22",
                    "label": "2 - Progressing",
                    "text": "Is fairly reliable but occasionally overcommits."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E22",
                    "label": "3 - Practicing",
                    "text": "Demonstrates reliability and places a strong emphasis on the team meeting its commitments."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F22",
                    "label": "4 - Advancing",
                    "text": "Builds a team with an exemplary reputation for reliability and meeting even difficult commitments; puts in extra work when needed."
                  }
                ]
              },
              {
                "id": "instills-trust-people-leader-3",
                "statement": "Maintains honesty and authenticity and encourages others to do the same.",
                "sourceCell": "B23",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C23",
                    "label": "1 - Developing",
                    "text": "May show a lack of transparency regarding facts or motives, or allow others to hide or distort the truth."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D23",
                    "label": "2 - Progressing",
                    "text": "Encourages others to be upfront with one another, but occasionally shows a lack of transparency."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E23",
                    "label": "3 - Practicing",
                    "text": "Is a model of honesty and authenticity, and encourages others to be up front with each other."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F23",
                    "label": "4 - Advancing",
                    "text": "Builds trust among people and groups by ensuring honest and up-front communication; takes steps to maintain transparency."
                  }
                ]
              },
              {
                "id": "instills-trust-people-leader-4",
                "statement": "Is trusted to represent or protect the interests of others fairly.",
                "sourceCell": "B24",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C24",
                    "label": "1 - Developing",
                    "text": "Does little to protect the interests of those not present; may not fairly or fully represent their concerns."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D24",
                    "label": "2 - Progressing",
                    "text": "Tries to protect the interests of others; may not adequately represent all their concerns."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E24",
                    "label": "3 - Practicing",
                    "text": "Fairly represents the interests of others and is trusted to speak up on their behalf."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F24",
                    "label": "4 - Advancing",
                    "text": "Goes out of the way to fairly represent and protect the interests of those not present; is widely trusted to speak up for others’ needs."
                  }
                ]
              }
            ]
          },
          "senior_leader": {
            "sourceLabel": "Senior Leader",
            "sourceHeaderCell": "B26",
            "behaviors": [
              {
                "id": "instills-trust-senior-leader-1",
                "statement": "Acts in the best interests of others and the organization, even when it conflicts with self-interests.",
                "sourceCell": "B28",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C28",
                    "label": "1 - Developing",
                    "text": "At times, may place self-interests above the best interests of the organization and its stakeholders."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D28",
                    "label": "2 - Progressing",
                    "text": "Prioritizes the organization's needs but at times, places self interests above the best interests of the organization."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E28",
                    "label": "3 - Practicing",
                    "text": "Places the organization’s needs first, even when they conflict with self-interests."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F28",
                    "label": "4 - Advancing",
                    "text": "Is widely trusted to place the needs and best interests of the organization above any self- interests."
                  }
                ]
              },
              {
                "id": "instills-trust-senior-leader-2",
                "statement": "Models dependability and expects others to live up to their agreements.",
                "sourceCell": "B29",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C29",
                    "label": "1 - Developing",
                    "text": "Occasionally overcommits, or diminishes the trust of stakeholders when the organization is unable to meet its commitments."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D29",
                    "label": "2 - Progressing",
                    "text": "Is dependable but occasionally overcommits."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E29",
                    "label": "3 - Practicing",
                    "text": "Demonstrates dependability and builds an organization with a reputation for living up to its commitments."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F29",
                    "label": "4 - Advancing",
                    "text": "Creates an organization with an exemplary reputation for honoring agreements and meeting even highly challenging commitments."
                  }
                ]
              },
              {
                "id": "instills-trust-senior-leader-3",
                "statement": "Shows consistency between words and actions, gaining people's trust and respect.",
                "sourceCell": "B30",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C30",
                    "label": "1 - Developing",
                    "text": "At times, does not practice what is preached, diminishing trust and respect."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D30",
                    "label": "2 - Progressing",
                    "text": "Is mainly consistent between what is said and what is done but at times does not practice what is preached."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E30",
                    "label": "3 - Practicing",
                    "text": "Gains others' trust and respect by showing consistency between what is said and what is done."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F30",
                    "label": "4 - Advancing",
                    "text": "Is known to instill trust and gain respect by aligning actions to words and values; shows consistency across many leadership challenges."
                  }
                ]
              },
              {
                "id": "instills-trust-senior-leader-4",
                "statement": "Is truthful and transparent, fostering a sense of trust in the organization and its leadership.",
                "sourceCell": "B31",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C31",
                    "label": "1 - Developing",
                    "text": "May tolerate a lack of transparency or at times distort the truth, reducing the trust that others place in the organization."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D31",
                    "label": "2 - Progressing",
                    "text": "Is mainly honest and transparent but at times, is selective with the trust."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E31",
                    "label": "3 - Practicing",
                    "text": "Acts as a role model for honesty and transparency, promoting trust in the organization and its leadership."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F31",
                    "label": "4 - Advancing",
                    "text": "Develops strong trust in the organization and its leadership through open and honest communication; takes steps to actively ensure transparency."
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "id": "collaborates",
        "name": "Collaborates",
        "sourceSheet": "Collaborates",
        "definition": "Building partnerships and working collaboratively with others to meet shared objectives.",
        "definitionSourceCell": "B2",
        "group": "people",
        "roles": {
          "people_leader": {
            "sourceLabel": "People Leader",
            "sourceHeaderCell": "B5",
            "behaviors": [
              {
                "id": "collaborates-people-leader-1",
                "statement": "Credits others for their contributions and accomplishments.",
                "sourceCell": "B7",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C7",
                    "label": "1 - Developing",
                    "text": "Allows credit to be distributed inappropriately; gives an individual credit for shared successes, or shared credit for someone’s personal accomplishments."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D7",
                    "label": "2 - Progressing",
                    "text": "Inconsistently distributes credit amongst the team and individuals; not actively thinking about how to acknowledge employees."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E7",
                    "label": "3 - Practicing",
                    "text": "Makes sure that both individuals and the team as a whole receive credit for contributions and accomplishments."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F7",
                    "label": "4 - Advancing",
                    "text": "Distributes credit skillfully; ensures that the team receives accolades for shared successes and individuals are rewarded for their contributions."
                  }
                ]
              },
              {
                "id": "collaborates-people-leader-2",
                "statement": "Encourages people to express their views openly.",
                "sourceCell": "B8",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C8",
                    "label": "1 - Developing",
                    "text": "Provides limited opportunities for people to express themselves openly."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D8",
                    "label": "2 - Progressing",
                    "text": "Provides opportunities for people to express themselves in select situations."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E8",
                    "label": "3 - Practicing",
                    "text": "Encourages people to share their honest views and reacts in a non- defensive way when they do so."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F8",
                    "label": "4 - Advancing",
                    "text": "Regularly solicits others’ ideas and perspectives and leaves space in a conversation for people to contribute."
                  }
                ]
              },
              {
                "id": "collaborates-people-leader-3",
                "statement": "Facilitates effective collaboration among coworkers and external partners.",
                "sourceCell": "B9",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C9",
                    "label": "1 - Developing",
                    "text": "Misses opportunities to ensure effective collaboration among coworkers and external partners."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D9",
                    "label": "2 - Progressing",
                    "text": "Facilitates collaboration between certain employees, functions, and/or divisions."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E9",
                    "label": "3 - Practicing",
                    "text": "Encourages coworkers and external partners to work together as a team."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F9",
                    "label": "4 - Advancing",
                    "text": "Takes clear steps to simplify, enhance, and improve collaboration among coworkers and external partners."
                  }
                ]
              },
              {
                "id": "collaborates-people-leader-4",
                "statement": "Involves others in making decisions on behalf of the group.",
                "sourceCell": "B10",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C10",
                    "label": "1 - Developing",
                    "text": "Makes decisions without including affected team members."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D10",
                    "label": "2 - Progressing",
                    "text": "Inconsistently involves team members when making decisions that affect them."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E10",
                    "label": "3 - Practicing",
                    "text": "Involves others as appropriate when making decisions on behalf of the team."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F10",
                    "label": "4 - Advancing",
                    "text": "Seeks out and draws upon a diversity of perspectives when making decisions on behalf of the team."
                  }
                ]
              }
            ]
          },
          "senior_leader": {
            "sourceLabel": "Senior Leader",
            "sourceHeaderCell": "B12",
            "behaviors": [
              {
                "id": "collaborates-senior-leader-1",
                "statement": "Exemplifies collaborative leadership by inviting a wide variety of perspectives to the discussions.",
                "sourceCell": "B14",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C14",
                    "label": "1 - Developing",
                    "text": "Remains overly independent or relies on a narrow spectrum of views rather than broadening the conversation."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D14",
                    "label": "2 - Progressing",
                    "text": "Relies on a narrow spectrum of views in certain situations, while gatehring broad perspectives in others."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E14",
                    "label": "3 - Practicing",
                    "text": "Seeks out a broad range of perspectives when leading discussions, formulating solutions, or charting strategies."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F14",
                    "label": "4 - Advancing",
                    "text": "Adeptly pursues, investigates, and integrates a wide array of viewpoints when leading discussions, formulating solutions, or charting strategies."
                  }
                ]
              },
              {
                "id": "collaborates-senior-leader-2",
                "statement": "Creates a climate where people communicate fearlessly.",
                "sourceCell": "B15",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C15",
                    "label": "1 - Developing",
                    "text": "Acts in ways that discourage fearless communication."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D15",
                    "label": "2 - Progressing",
                    "text": "Tries to create a space for fearless communication but may get defensive when employees express differing views."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E15",
                    "label": "3 - Practicing",
                    "text": "Supports an environment where people feel able to express themselves with honesty."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F15",
                    "label": "4 - Advancing",
                    "text": "Creates and enforces an open climate where people have venues to communicate fearlessly."
                  }
                ]
              },
              {
                "id": "collaborates-senior-leader-3",
                "statement": "Builds a culture of collaboration and teamwork across organizational boundaries.",
                "sourceCell": "B16",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C16",
                    "label": "1 - Developing",
                    "text": "Misses opportunities to engage in and advocate greater cross- organization teamwork."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D16",
                    "label": "2 - Progressing",
                    "text": "Occasionally facilitates collaboration on certain projects or across certain groups."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E16",
                    "label": "3 - Practicing",
                    "text": "Promotes a culture of collaboration across boundaries; urges teamwork with other groups, functions, and teams."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F16",
                    "label": "4 - Advancing",
                    "text": "Initiates and advocates significant efforts to build and promote a culture of collaboration that spans organizational boundaries."
                  }
                ]
              },
              {
                "id": "collaborates-senior-leader-4",
                "statement": "Removes organizational barriers to collaboration.",
                "sourceCell": "B17",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C17",
                    "label": "1 - Developing",
                    "text": "Allows culture, structure, or processes to drive competition rather than collaboration (i.e., structure or compensation system)."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D17",
                    "label": "2 - Progressing",
                    "text": "Removes certain organizational barriers to collaboration but may hesitate based on difficulty level or time investment."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E17",
                    "label": "3 - Practicing",
                    "text": "Takes clear steps to address the major barriers to collaboration."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F17",
                    "label": "4 - Advancing",
                    "text": "Introduces initiatives to encourage collaboration and actively breaks down barriers between groups."
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "id": "develops-talent",
        "name": "Develops Talent",
        "sourceSheet": "Develops Talent",
        "definition": "Developing people to meet both their career goals and the organization’s goals.",
        "definitionSourceCell": "B2",
        "group": "people",
        "roles": {
          "people_leader": {
            "sourceLabel": "People Leader",
            "sourceHeaderCell": "B5",
            "behaviors": [
              {
                "id": "develops-talent-people-leader-1",
                "statement": "Ensures that qualified successors are identified and ready for key team roles.",
                "sourceCell": "B7",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C7",
                    "label": "1 - Developing",
                    "text": "Makes insufficient efforts to identify successors for key roles."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D7",
                    "label": "2 - Progressing",
                    "text": "Takes a subjective or inconsistent approach to identifying key successors."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E7",
                    "label": "3 - Practicing",
                    "text": "Identifies key successors on their team."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F7",
                    "label": "4 - Advancing",
                    "text": "Looks to the future and builds a long-term succession plan for all key roles."
                  }
                ]
              },
              {
                "id": "develops-talent-people-leader-2",
                "statement": "Fosters an environment that encourages and enables others to build skills and develop their careers.",
                "sourceCell": "B8",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C8",
                    "label": "1 - Developing",
                    "text": "Places little emphasis on people’s development; focuses on day-to-day results without providing enough learning opportunities."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D8",
                    "label": "2 - Progressing",
                    "text": "Focuses on the importance of employee learning/development when opportunities are presented or when absolutely necessary."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E8",
                    "label": "3 - Practicing",
                    "text": "Emphasizes the importance of learning, urges people to build new skills, and provides opportunities for them to develop their careers."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F8",
                    "label": "4 - Advancing",
                    "text": "Finds unique and effective ways to create a learning culture within the team; gets people energized about their own development and actively helps people develop their careers."
                  }
                ]
              },
              {
                "id": "develops-talent-people-leader-3",
                "statement": "Provides useful real-time coaching to others.",
                "sourceCell": "B9",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C9",
                    "label": "1 - Developing",
                    "text": "Overlooks chances to provide real-time coaching to team members."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D9",
                    "label": "2 - Progressing",
                    "text": "Provides coaching to team members when the situation requires it."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E9",
                    "label": "3 - Practicing",
                    "text": "Takes advantage of some opportunities to provide useful real-time coaching to team members."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F9",
                    "label": "4 - Advancing",
                    "text": "Capitalizes quickly on teachable situations to offer insightful real- time coaching that moves people closer to their learning goals."
                  }
                ]
              },
              {
                "id": "develops-talent-people-leader-4",
                "statement": "Recommends developmental activities and stretch assignments to others.",
                "sourceCell": "B10",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C10",
                    "label": "1 - Developing",
                    "text": "Seldom mentions or recommends development opportunities and assignments."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D10",
                    "label": "2 - Progressing",
                    "text": "Occasionally mentions or recommends development opportunities or assignments."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E10",
                    "label": "3 - Practicing",
                    "text": "Provides team members with some valuable development activities and stretch assignments."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F10",
                    "label": "4 - Advancing",
                    "text": "Recommends and facilitates developmental activities and assignments that make substantial contributions to people’s growth."
                  }
                ]
              }
            ]
          },
          "senior_leader": {
            "sourceLabel": "Senior Leader",
            "sourceHeaderCell": "B12",
            "behaviors": [
              {
                "id": "develops-talent-senior-leader-1",
                "statement": "Creates a culture that emphasizes ongoing learning and development and reinforces its value to the organization.",
                "sourceCell": "B14",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C14",
                    "label": "1 - Developing",
                    "text": "Takes few or insufficient steps to create a learning environment and makes limited efforts to champion the value of development."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D14",
                    "label": "2 - Progressing",
                    "text": "Takes increasing steps to create a learning environment; supports other's development when the opportunities present themselves."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E14",
                    "label": "3 - Practicing",
                    "text": "Creates a development-focused culture in the organization, supporting others’ development efforts and reinforcing the value of learning."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F14",
                    "label": "4 - Advancing",
                    "text": "Consistently emphasizes the importance of continuous learning and ensures that the culture places value on development."
                  }
                ]
              },
              {
                "id": "develops-talent-senior-leader-2",
                "statement": "Coaches and mentors key talent.",
                "sourceCell": "B15",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C15",
                    "label": "1 - Developing",
                    "text": "Provides key talent with little coaching; misses opportunities to act as a mentor."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D15",
                    "label": "2 - Progressing",
                    "text": "Offers guidance on some occasions but may miss opportunities to provide timely or more developmental feedback"
                  },
                  {
                    "value": 3,
                    "sourceCell": "E15",
                    "label": "3 - Practicing",
                    "text": "Coaches and mentors key talent when the opportunity arises."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F15",
                    "label": "4 - Advancing",
                    "text": "Proactively creates opportunities to coach and mentor key talent."
                  }
                ]
              },
              {
                "id": "develops-talent-senior-leader-3",
                "statement": "Sponsors organization-wide initiatives to ensure leadership excellence and ready.",
                "sourceCell": "B16",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C16",
                    "label": "1 - Developing",
                    "text": "Provides minimal support for or pays little attention to organization-wide initiatives to promote leadership excellence or build ready talent."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D16",
                    "label": "2 - Progressing",
                    "text": "Provides limited support for organization-wide initiatives to build leadership excellence and build ready talent."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E16",
                    "label": "3 - Practicing",
                    "text": "Contributes to and supports organization-wide initiatives to build leadership excellence and build ready talent."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F16",
                    "label": "4 - Advancing",
                    "text": "Sponsors and champions organization-wide initiatives to ensure leadership excellence and build ready talent."
                  }
                ]
              },
              {
                "id": "develops-talent-senior-leader-4",
                "statement": "Champions organizational efforts that support the development of all employees.",
                "sourceCell": "B17",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C17",
                    "label": "1 - Developing",
                    "text": "Makes only limited efforts to drive organization-wide development; may focus on developing some people but not others."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D17",
                    "label": "2 - Progressing",
                    "text": "Shares developmental programs and processes when the opportunity arises; may inadvertently develop some people more than others."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E17",
                    "label": "3 - Practicing",
                    "text": "Applies and establishes ongoing programs and processes to help facilitate the development of all talent."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F17",
                    "label": "4 - Advancing",
                    "text": "Demonstrates strong commitment to the development of the organization and all its employees; takes personal accountability to ensure ongoing development practices."
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "id": "ensures-accountability",
        "name": "Ensures Accountability",
        "sourceSheet": "Ensures Accountability",
        "definition": "Holding self and others accountable to meet commitments.",
        "definitionSourceCell": "B2",
        "group": "people",
        "roles": {
          "people_leader": {
            "sourceLabel": "People Leader",
            "sourceHeaderCell": "B5",
            "behaviors": [
              {
                "id": "ensures-accountability-people-leader-1",
                "statement": "Accepts responsibility for successes and failures of own work and the team’s work.",
                "sourceCell": "B7",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C7",
                    "label": "1 - Developing",
                    "text": "Rarely accepts responsibility for failures of own work and the team’s work."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D7",
                    "label": "2 - Progressing",
                    "text": "Inconsistently accepts responsibility for the successes and failures of own work and the team's work."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E7",
                    "label": "3 - Practicing",
                    "text": "Typically accepts responsibility for the successes and failures of own work and the team’s work."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F7",
                    "label": "4 - Advancing",
                    "text": "Consistently accepts responsibility for the successes and failures of own work and the team’s work."
                  }
                ]
              },
              {
                "id": "ensures-accountability-people-leader-2",
                "statement": "Holds self and team accountable for outcomes (e.g., achieving goals and complying with policies and procedures)",
                "sourceCell": "B8",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C8",
                    "label": "1 - Developing",
                    "text": "Allows self or team to ignore or stretch policies, procedures, or workgroup goals."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D8",
                    "label": "2 - Progressing",
                    "text": "Shifts policies, procedures, or goals depending on the project or initiative."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E8",
                    "label": "3 - Practicing",
                    "text": "Adheres to and enforces workgroup goals, policies, and procedures."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F8",
                    "label": "4 - Advancing",
                    "text": "Fosters an environment in which the team holds each other accountable for always delivering on workgroup goals as well as adhering to all policies and procedures."
                  }
                ]
              },
              {
                "id": "ensures-accountability-people-leader-3",
                "statement": "Monitors metrics and milestones to chart progress against expectations and accountabilities.",
                "sourceCell": "B9",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C9",
                    "label": "1 - Developing",
                    "text": "Does not keep sufficient track of progress against expectations and accountabilities."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D9",
                    "label": "2 - Progressing",
                    "text": "Keeps tracks of progress for certain projects or initiatives."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E9",
                    "label": "3 - Practicing",
                    "text": "Keeps track of expectations and accountabilities using appropriate metrics and milestones."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F9",
                    "label": "4 - Advancing",
                    "text": "Gives close attention to metrics and milestones to chart progress, quickly identifying gaps and redirecting efforts accordingly."
                  }
                ]
              },
              {
                "id": "ensures-accountability-people-leader-4",
                "statement": "Designs feedback processes into the work.",
                "sourceCell": "B10",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C10",
                    "label": "1 - Developing",
                    "text": "Allows work to unfold without making sufficient effort to seek, explore, or share feedback from key stakeholders."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D10",
                    "label": "2 - Progressing",
                    "text": "Incorporates feedback processes into specific work projects or teams."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E10",
                    "label": "3 - Practicing",
                    "text": "Takes steps to ensure that the team gathers and learns from feedback as the work unfolds."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F10",
                    "label": "4 - Advancing",
                    "text": "Designs feedback loops that enable the team to quickly gather and learn from stakeholder feedback as the work unfolds."
                  }
                ]
              }
            ]
          },
          "senior_leader": {
            "sourceLabel": "Senior Leader",
            "sourceHeaderCell": "B12",
            "behaviors": [
              {
                "id": "ensures-accountability-senior-leader-1",
                "statement": "Creates an environment of accountability for meeting agreed-upon expectations.",
                "sourceCell": "B14",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C14",
                    "label": "1 - Developing",
                    "text": "Does not emphasize accountability sufficiently; may allow too many people or teams to miss goals."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D14",
                    "label": "2 - Progressing",
                    "text": "Occasionally holds people and teams accountable but may miss some goals."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E14",
                    "label": "3 - Practicing",
                    "text": "Emphasizes accountability and takes appropriate action when teams or individuals do not meet goals."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F14",
                    "label": "4 - Advancing",
                    "text": "Fosters a strong feeling of accountability throughout the organization; ensures that people at all levels take agreed-upon expectations seriously."
                  }
                ]
              },
              {
                "id": "ensures-accountability-senior-leader-2",
                "statement": "Ensures that the organization meets its commitments.",
                "sourceCell": "B15",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C15",
                    "label": "1 - Developing",
                    "text": "Allows the organization to miss targets; places limited emphasis on meeting all commitments."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D15",
                    "label": "2 - Progressing",
                    "text": "Places some emphasis on meeting organizational commitments and attempts to meet targets."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E15",
                    "label": "3 - Practicing",
                    "text": "Takes clear action to ensure that the organization meets its commitments."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F15",
                    "label": "4 - Advancing",
                    "text": "Plays a front-and-center role in ensuring that commitments are met; pushes back and makes changes to prevent the organization from missing any goal."
                  }
                ]
              },
              {
                "id": "ensures-accountability-senior-leader-3",
                "statement": "Holds leaders accountable for the performance of their teams.",
                "sourceCell": "B16",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C16",
                    "label": "1 - Developing",
                    "text": "Rarely holds leaders accountable for managing the performance of their teams; may let poor performance continue for an extended period of time."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D16",
                    "label": "2 - Progressing",
                    "text": "Inconsistently holds leaders accountable for managing the performance of their teams; intervenes when poor performance has continued for an extended period of time."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E16",
                    "label": "3 - Practicing",
                    "text": "Addresses poor performance in teams; does not allow leaders to simply blame their employees or make excuses."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F16",
                    "label": "4 - Advancing",
                    "text": "Fosters a sense of accountability in leaders; ensures that leaders feel a strong responsibility for the performance of their teams."
                  }
                ]
              },
              {
                "id": "ensures-accountability-senior-leader-4",
                "statement": "Uses management systems to monitor the organization’s performance against goals.",
                "sourceCell": "B17",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C17",
                    "label": "1 - Developing",
                    "text": "Insufficiently monitors information from key indicators, processes, and management systems; may overlook or do little to correct deviations from the organization’s goals."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D17",
                    "label": "2 - Progressing",
                    "text": "Inconsistently monitors information from key indicators, processes, and management systems; sometimes corrects deiations for the organization's goals."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E17",
                    "label": "3 - Practicing",
                    "text": "Uses key indicators, processes, and management systems to monitor the organization’s performance against goals."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F17",
                    "label": "4 - Advancing",
                    "text": "Constantly reviews and integrates the most appropriate information from key indicators, processes, and management systems; takes quick corrective action when appropriate."
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "id": "strategic-mindset",
        "name": "Strategic Mindset",
        "sourceSheet": "Strategic Mindset",
        "definition": "Seeing ahead to future possibilities and translating them into breakthrough strategies.",
        "definitionSourceCell": "B2",
        "group": "senior",
        "roles": {
          "senior_leader": {
            "sourceLabel": "Senior Leader",
            "sourceHeaderCell": "B5",
            "behaviors": [
              {
                "id": "strategic-mindset-senior-leader-1",
                "statement": "Leverages the organization’s key differentiators to develop a viable long-term strategy.",
                "sourceCell": "B7",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C7",
                    "label": "1 - Developing",
                    "text": "Tends to overlook or downplay the organization’s key differentiators when developing a strategy."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D7",
                    "label": "2 - Progressing",
                    "text": "Occasionally leverages the organization's key differentiators when developing a strategy."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E7",
                    "label": "3 - Practicing",
                    "text": "Develops a long-term strategy that leverages the organization’s key differentiators in the market."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F7",
                    "label": "4 - Advancing",
                    "text": "Clearly distinguishes and leverages the organization’s key differentiators, incorporating them into a solid long-term strategy."
                  }
                ]
              },
              {
                "id": "strategic-mindset-senior-leader-2",
                "statement": "Explores future scenarios and possibilities to help the organization respond to change and shape the future.",
                "sourceCell": "B8",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C8",
                    "label": "1 - Developing",
                    "text": "Insufficiently considers how things may change in the future and how the organization could best address these scenarios."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D8",
                    "label": "2 - Progressing",
                    "text": "Considers future scenarios only when faced with potential danger or uncertainty."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E8",
                    "label": "3 - Practicing",
                    "text": "Considers multiple scenarios to best prepare the organization for potential changes and possibilities."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F8",
                    "label": "4 - Advancing",
                    "text": "Is highly alert to the future, analyzing multiple scenarios to equip the organization to address change, tackle challenges, and shape new possibilities."
                  }
                ]
              },
              {
                "id": "strategic-mindset-senior-leader-3",
                "statement": "Revisits and updates business strategies in response to evolving market dynamics and organizational needs.",
                "sourceCell": "B9",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C9",
                    "label": "1 - Developing",
                    "text": "Infrequently reviews business strategies, allowing them to become outdated and less relevant."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D9",
                    "label": "2 - Progressing",
                    "text": "Occasionally reviews and updates business strategies to address market dynamics."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E9",
                    "label": "3 - Practicing",
                    "text": "Ensures that business strategies are up-to-date and address evolving dynamics in the market and organization."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F9",
                    "label": "4 - Advancing",
                    "text": "Updates business strategies regularly in response to evolving market dynamics and organizational needs, then clearly communicates updated direction and priorities."
                  }
                ]
              },
              {
                "id": "strategic-mindset-senior-leader-4",
                "statement": "Develops and integrates organizational strategies to achieve and sustain competitive advantage.",
                "sourceCell": "B10",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C10",
                    "label": "1 - Developing",
                    "text": "Allows strategies from various units to be out of alignment, resulting in a weaker competitive position."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D10",
                    "label": "2 - Progressing",
                    "text": "Inconsistently aligns organizational strategies, allowing some units to be misaligned."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E10",
                    "label": "3 - Practicing",
                    "text": "Ensures organizational strategies from various units are aligned and integrated for optimal competitive advantage."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F10",
                    "label": "4 - Advancing",
                    "text": "Integrates organizational strategies from all units to align the business, focus efforts, and achieve a sustainable competitive advantage."
                  }
                ]
              }
            ]
          }
        }
      },
      {
        "id": "drives-vision-purpose",
        "name": "Drives Vision and Purpose",
        "sourceSheet": "Drives Vision and Purpose",
        "definition": "Painting a compelling picture of the vision and strategy that motivates others to action.",
        "definitionSourceCell": "B2",
        "group": "senior",
        "roles": {
          "senior_leader": {
            "sourceLabel": "Senior Leader",
            "sourceHeaderCell": "B5",
            "behaviors": [
              {
                "id": "drives-vision-purpose-senior-leader-1",
                "statement": "Articulates a compelling vision of the positive impact the organization can make.",
                "sourceCell": "B7",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C7",
                    "label": "1 - Developing",
                    "text": "Leaves the organization’s positive impact unclear; may focus too much on the work to be done rather than the broader purpose behind these efforts."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D7",
                    "label": "2 - Progressing",
                    "text": "Communicates the organization's positive impact depending on the circumstances; may only focus on the broader purpose of the organization when prompted."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E7",
                    "label": "3 - Practicing",
                    "text": "Delivers compelling messages about the positive impact the organization can have on customers, the community, society, etc."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F7",
                    "label": "4 - Advancing",
                    "text": "Speaks regularly about why the work they do is important to the world."
                  }
                ]
              },
              {
                "id": "drives-vision-purpose-senior-leader-2",
                "statement": "Ensures clarity around the organization’s vision, mission, and values.",
                "sourceCell": "B8",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C8",
                    "label": "1 - Developing",
                    "text": "Makes few or ineffective efforts to clarify the organization’s vision, mission, and values."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D8",
                    "label": "2 - Progressing",
                    "text": "Provides inconsistent clarification of the organization's vision, mission, and values."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E8",
                    "label": "3 - Practicing",
                    "text": "Provides clarity around the organization’s vision, mission, and values."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F8",
                    "label": "4 - Advancing",
                    "text": "Expresses the organization’s vision, mission, and values in a compelling way that others can easily understand and remember."
                  }
                ]
              },
              {
                "id": "drives-vision-purpose-senior-leader-3",
                "statement": "Sustains organization-wide energy and optimism toward the future.",
                "sourceCell": "B9",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C9",
                    "label": "1 - Developing",
                    "text": "Conveys limited energy and optimism toward the future or acts in ways that diminish the enthusiasm of others."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D9",
                    "label": "2 - Progressing",
                    "text": "Adopts the energy of the organization and conveys optimism toward the future when prompted."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E9",
                    "label": "3 - Practicing",
                    "text": "Instills a sense of energy and optimism throughout the organization."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F9",
                    "label": "4 - Advancing",
                    "text": "Uses a variety of methods and communication techniques to build a feeling of energy, optimism, and motivation throughout the organization."
                  }
                ]
              },
              {
                "id": "drives-vision-purpose-senior-leader-4",
                "statement": "Conveys commitment to the organization’s purpose and vision despite resistance or hardships.",
                "sourceCell": "B10",
                "anchors": [
                  {
                    "value": 1,
                    "sourceCell": "C10",
                    "label": "1 - Developing",
                    "text": "Shows only limited regard for the organization’s purpose or vision; might give up on mission-critical endeavors quickly in the face of opposition or obstacles."
                  },
                  {
                    "value": 2,
                    "sourceCell": "D10",
                    "label": "2 - Progressing",
                    "text": "Maintains commitment to the organization's purpose and vision; may back down when situations become diffcult or in the face of resistance."
                  },
                  {
                    "value": 3,
                    "sourceCell": "E10",
                    "label": "3 - Practicing",
                    "text": "Maintains and expresses commitment to the organization’s purpose and vision, even when situations become difficult or resistance is widespread."
                  },
                  {
                    "value": 4,
                    "sourceCell": "F10",
                    "label": "4 - Advancing",
                    "text": "Champions a clear purpose and vision persistently and uses this sense of mission to overcome resistance and hardships."
                  }
                ]
              }
            ]
          }
        }
      }
    ],
    "stages": [
      {
        "stage": "Contributing to the Work",
        "employeeLevel": "Non-Exempt Traditional and Step",
        "focus": "Reliable execution and applied skill",
        "primaryContribution": "Delivering the day-to-day work the organization depends on"
      },
      {
        "stage": "Contributing Through Ownership",
        "employeeLevel": "Exempt",
        "focus": "Accountability and depth of expertise",
        "primaryContribution": "Owning projects and outcomes end to end."
      },
      {
        "stage": "Contributing Through Others",
        "employeeLevel": "People Leaders (Supervisors and Managers)",
        "focus": "Leadership and collaboration",
        "primaryContribution": "Guiding, developing talent, and representing the organization"
      },
      {
        "stage": "Contributing Strategically",
        "employeeLevel": "Senior Leaders (Senior Managers, Directors, and Officers)",
        "focus": "Vision and strategic influence",
        "primaryContribution": "Shaping strategy and culture, defining direction, and influencing high-level outcomes"
      }
    ],
    "ratingScaleSheet": {
      "exempt_nxt": [
        {
          "value": 1,
          "label": "1 - Needs Improvement",
          "description": "Underperforming or limited demonstration of the described behaviors."
        },
        {
          "value": 2,
          "label": "2 - Progressing",
          "description": "Somewhat consistently demonstrates the described behaviors, or new in role."
        },
        {
          "value": 3,
          "label": "3 - Practicing",
          "description": "Consistenly demonstrates the described behaviors."
        },
        {
          "value": 4,
          "label": "4 - Advancing",
          "description": "Expertly demonstrates the described behaviors and continually surpasses the standard."
        }
      ],
      "nxs": [
        {
          "value": 1,
          "label": "1 - Does Not Meet Expectations",
          "description": "Improvement in skills and/or overall performance is required to achieve the expected performance level."
        },
        {
          "value": 2,
          "label": "2 - Meets Expectations",
          "description": "Competency meets the standard on a regular basis. Demonstrates a competent and dependable level of performance."
        }
      ]
    },
    "cautions": [
      "Rating Scale sheet first four-point label is Needs Improvement while competency sheets and draft personas use Developing. Preserve source labels; avoid presenting any draft label as finalized.",
      "Customer Focus and Instills Trust first role header says Non-Exempt; two-point anchors and shared Exempt & NXT block identify it as NXS.",
      "Exempt & Non-Exempt Traditional share a behavior block in this supplied workbook.",
      "Do not use stage of contribution as a performance rating.",
      "Personas are explicitly draft and map parallel tracks, not a promotion ladder."
    ],
    "personas": {
      "status": "draft",
      "individualContributorArchitecture": "The job architecture shows Professional, Support, and Operational as three parallel Individual Contributor career tracks—not as sequential promotion levels. The persona should therefore describe how strong and developing performance looks within each track. Job level can later add scope and complexity inside a track, while the five competencies remain consistent anchors for observable daily behavior.",
      "individualContributorLeveling": "Within each track, higher job levels should increase complexity, independence, influence, and consequence—not replace the competency definitions. For example, Customer Focus progresses from understanding and resolving an individual request to anticipating patterns and improving the broader service or solution. The performance anchors above describe quality of demonstration; job level describes the scope in which that demonstration occurs.",
      "leadershipArchitecture": "Leadership progression changes the scope of impact—not the expectation to demonstrate the competencies well. Foundational leaders create clarity, trust, accountability, and development within a frontline team. Tenured managers build repeatable systems and lead across teams. Senior Managers and Directors translate strategy across functions, while VPs and SVPs shape enterprise direction, culture, and customer outcomes. Developing examples identify the next leadership habit to strengthen rather than labeling a leader’s potential.",
      "leadershipLeveling": "Job level defines the breadth, complexity, time horizon, and consequence of leadership decisions; performance rating defines how consistently and effectively the leader demonstrates the competencies at that scope. A high-performing Supervisor is not expected to operate as a VP, and a VP who demonstrates a competency only at team scope is not yet meeting the enterprise-level expectation.",
      "tracks": [
        {
          "name": "Professional",
          "category": "individualContributor",
          "status": "draft",
          "sourceSheet": "IC Personas- draft",
          "title": "PROFESSIONAL TRACK | ANALYST, ENGINEER, TECHNICAL SPECIALIST",
          "focus": "Persona focus: independent judgment, complex problem solving, stakeholder influence, and increasing scope without people-management responsibility.",
          "topEndLabel": "TOP END — 4 ADVANCING",
          "developingEndLabel": "DEVELOPING END — 1 DEVELOPING",
          "competencies": [
            {
              "name": "Action Oriented",
              "topEnd": "Acts decisively on complex issues, pursues valuable opportunities, and stays engaged until the solution is implemented and working.",
              "developingEnd": "May delay action while seeking certainty or direction; develops by defining the next evidence-based step, decision point, and escalation threshold."
            },
            {
              "name": "Self Development",
              "topEnd": "Seeks varied feedback, maintains a detailed growth plan, applies new expertise in challenging assignments, and shares learning with peers.",
              "developingEnd": "May rely on current expertise or unclear development goals; grows through one targeted capability, deliberate practice, and feedback from multiple perspectives."
            },
            {
              "name": "Communicates Effectively",
              "topEnd": "Translates complex information for each audience, listens deeply, shares risks and updates early, and creates polished, complete documentation.",
              "developingEnd": "May use jargon, omit context, or communicate inconsistently; improves by leading with impact, tailoring detail, and documenting decisions and next steps."
            },
            {
              "name": "Customer Focus",
              "topEnd": "Anticipates changing user needs, validates solutions in practice, follows issues to full resolution, and converts feedback into improvements.",
              "developingEnd": "May focus on the technical request without exploring the underlying need; develops by asking why, observing use, and confirming the outcome with the customer."
            },
            {
              "name": "Instills Trust",
              "topEnd": "Communicates difficult information candidly, follows professional standards, makes realistic commitments, and delivers reliably under competing priorities.",
              "developingEnd": "May overcommit, avoid uncomfortable risks, or apply standards unevenly; builds trust through transparent trade-offs, early resets, and consistent follow-through."
            }
          ],
          "dailyPicture": "A credible expert who combines technical or professional depth with timely action, clear judgment, customer awareness, and dependable execution."
        },
        {
          "name": "Support",
          "category": "individualContributor",
          "status": "draft",
          "sourceSheet": "IC Personas- draft",
          "title": "SUPPORT TRACK | ADMINISTRATIVE, COORDINATION, CALL-CENTER SUPPORT",
          "focus": "Persona focus: enabling others, coordinating information and service, resolving requests, and applying sound judgment within established processes.",
          "topEndLabel": "TOP END — 4 ADVANCING",
          "developingEndLabel": "DEVELOPING END — 1 DEVELOPING",
          "competencies": [
            {
              "name": "Action Oriented",
              "topEnd": "Anticipates needs, addresses issues promptly, handles familiar work independently, and maintains momentum across competing requests.",
              "developingEnd": "May wait for detailed direction or allow requests to approach deadlines; develops through clear priorities, checklists, and ownership of the next appropriate action."
            },
            {
              "name": "Self Development",
              "topEnd": "Actively seeks feedback, builds a practical development plan, applies new tools and methods, and volunteers for work that broadens capability.",
              "developingEnd": "May stay with familiar methods or wait for learning to be assigned; grows by choosing a useful skill, practicing it in current work, and requesting targeted feedback."
            },
            {
              "name": "Communicates Effectively",
              "topEnd": "Keeps stakeholders well informed, listens carefully, adapts detail to the audience, and produces clear records, messages, and handoffs.",
              "developingEnd": "May share updates late, miss important details, or communicate too broadly or narrowly; improves by confirming the request and summarizing status, owner, and timing."
            },
            {
              "name": "Customer Focus",
              "topEnd": "Explores the reason behind requests, responds with urgency, coordinates the right support, follows up, and identifies ways to improve service.",
              "developingEnd": "May process the stated request without clarifying the need or confirming resolution; develops by asking probing questions, setting expectations, and closing the loop."
            },
            {
              "name": "Instills Trust",
              "topEnd": "Is direct and helpful, consistently follows policies, honors commitments despite competing priorities, and aligns words with actions.",
              "developingEnd": "May avoid candid updates, overpromise, or follow processes inconsistently; builds trust by setting accurate expectations and communicating early when circumstances change."
            }
          ],
          "dailyPicture": "A proactive partner who makes work easier for others through organization, timely communication, thoughtful service, and reliable follow-through."
        },
        {
          "name": "Operational",
          "category": "individualContributor",
          "status": "draft",
          "sourceSheet": "IC Personas- draft",
          "title": "OPERATIONAL TRACK | SERVICE, INTAKE, PROCESSING, SCHEDULING",
          "focus": "Persona focus: accurate and timely execution of defined work, positive customer interactions, appropriate independent action, and consistent process adherence.",
          "topEndLabel": "TOP END — 2 MEETS EXPECTATIONS",
          "developingEndLabel": "DEVELOPING END — 1 DOES NOT MEET EXPECTATIONS",
          "competencies": [
            {
              "name": "Action Oriented",
              "topEnd": "Approaches work with positive energy, starts promptly, resolves routine issues with available resources, and escalates complex situations appropriately.",
              "developingEnd": "May appear reluctant, delay routine work, or seek help unnecessarily; grows by using standard resources and taking the next authorized step with confidence."
            },
            {
              "name": "Self Development",
              "topEnd": "Uses coaching and training to build skills, seeks guidance on priorities, and practices new techniques directly in day-to-day work.",
              "developingEnd": "May hesitate to seek feedback or continue relying only on familiar habits; develops by practicing one new behavior, reviewing the result, and asking for coaching."
            },
            {
              "name": "Communicates Effectively",
              "topEnd": "Listens attentively, asks clarifying questions, provides the right level of detail, and records and shares relevant information promptly.",
              "developingEnd": "May miss key information, appear closed to another perspective, or give an unclear explanation; improves by paraphrasing the need and confirming understanding."
            },
            {
              "name": "Customer Focus",
              "topEnd": "Identifies stated and unstated needs, treats requests with urgency, coordinates the best available response, and confirms requirements were met.",
              "developingEnd": "May make assumptions, ask limited questions, or complete the transaction without checking the outcome; grows by probing respectfully and confirming satisfaction."
            },
            {
              "name": "Instills Trust",
              "topEnd": "Follows policies consistently, communicates honestly, keeps promises, and provides dependable updates when timing or circumstances change.",
              "developingEnd": "May bend a process, avoid direct information, or miss a commitment; builds trust through accurate expectations, documented promises, and consistent follow-through."
            }
          ],
          "dailyPicture": "A dependable operator who completes standard work accurately, serves customers respectfully, communicates clearly, and can be trusted to follow through."
        },
        {
          "name": "Foundational Management",
          "category": "leadership",
          "status": "draft",
          "sourceSheet": "Leadership Personas- draft",
          "title": "FOUNDATIONAL MANAGEMENT | SUPERVISOR / TEAM LEAD",
          "focus": "Scope: direct leadership of a frontline team; success is visible in daily priorities, coaching, communication, service, and follow-through.",
          "topEndLabel": "TOP END — 4 ADVANCING",
          "developingEndLabel": "DEVELOPING END — 1 DEVELOPING",
          "competencies": [
            {
              "name": "Action Oriented",
              "topEnd": "Creates appropriate urgency, encourages initiative, and helps the team act confidently on new challenges.",
              "developingEnd": "May allow hesitation or wait too long to mobilize the team; develops by clarifying the next action, authority, and deadline."
            },
            {
              "name": "Self Development",
              "topEnd": "Actively strengthens leadership skills, seeks feedback, takes stretch assignments, and models continuous learning.",
              "developingEnd": "May focus development mainly on technical work; grows by choosing one leadership behavior to practice and reviewing its impact."
            },
            {
              "name": "Communicates Effectively",
              "topEnd": "Adapts messages to the audience, listens actively, invites candid input, and removes routine communication barriers.",
              "developingEnd": "May communicate one way to everyone or react defensively to different views; improves by checking understanding and inviting questions."
            },
            {
              "name": "Customer Focus",
              "topEnd": "Uses customer feedback, addresses team capability gaps, reinforces service standards, and ensures requests are resolved.",
              "developingEnd": "May handle customer issues personally or react after problems occur; develops by using feedback and coaching the team to own outcomes."
            },
            {
              "name": "Instills Trust",
              "topEnd": "Aligns words and actions, communicates honestly, represents team members fairly, and ensures commitments are kept.",
              "developingEnd": "May overcommit or be inconsistent under pressure; builds trust by setting realistic expectations and addressing missed commitments directly."
            },
            {
              "name": "Collaborates",
              "topEnd": "Shares credit, invites perspectives, involves affected employees in decisions, and strengthens teamwork across partners.",
              "developingEnd": "May make decisions too independently or limit discussion; grows by identifying who is affected and involving them early."
            },
            {
              "name": "Develops Talent",
              "topEnd": "Provides real-time coaching, recommends useful development experiences, supports career growth, and begins succession planning.",
              "developingEnd": "May prioritize immediate output over development; improves by holding regular coaching conversations with specific practice opportunities."
            },
            {
              "name": "Ensures Accountability",
              "topEnd": "Sets clear expectations, tracks milestones, uses feedback loops, and accepts responsibility for team outcomes.",
              "developingEnd": "May apply expectations inconsistently or address misses late; develops by agreeing on measures, checkpoints, and consequences up front."
            }
          ],
          "dailyPicture": "A trusted first-line leader who creates clarity and momentum, coaches in the flow of work, and builds a team that communicates openly and delivers for customers."
        },
        {
          "name": "Tenured Management",
          "category": "leadership",
          "status": "draft",
          "sourceSheet": "Leadership Personas- draft",
          "title": "TENURED MANAGEMENT | MANAGER",
          "focus": "Scope: a larger or more complex team; success depends on building systems, capabilities, and consistency beyond individual transactions.",
          "topEndLabel": "TOP END — 4 ADVANCING",
          "developingEndLabel": "DEVELOPING END — 1 DEVELOPING",
          "competencies": [
            {
              "name": "Action Oriented",
              "topEnd": "Builds a can-do climate, removes barriers, creates meaningful challenges, and moves the team quickly toward opportunities.",
              "developingEnd": "May rely on personal intervention or permit bureaucracy to slow the team; develops by clarifying decision rights and removing recurring obstacles."
            },
            {
              "name": "Self Development",
              "topEnd": "Aligns growth with organizational priorities, expands leadership range, and deliberately pursues assignments that broaden impact.",
              "developingEnd": "May use an informal or self-focused development approach; grows by linking leadership goals to future team and business needs."
            },
            {
              "name": "Communicates Effectively",
              "topEnd": "Creates open dialogue across teams, tailors communication to diverse stakeholders, and resolves difficult communication issues quickly.",
              "developingEnd": "May communicate effectively within the team but inconsistently across functions; improves by mapping stakeholders and adapting message, channel, and timing."
            },
            {
              "name": "Customer Focus",
              "topEnd": "Anticipates service gaps, integrates processes with customer needs, uses feedback for improvement, and creates team ownership of the experience.",
              "developingEnd": "May focus on current service metrics without seeing emerging needs; develops by studying patterns and assigning preventive improvement actions."
            },
            {
              "name": "Instills Trust",
              "topEnd": "Builds a reputation for reliability and transparency, protects stakeholder interests, and reinforces integrity across the team.",
              "developingEnd": "May tolerate inconsistent candor or follow-through from strong performers; builds trust by applying standards consistently and addressing gaps promptly."
            },
            {
              "name": "Collaborates",
              "topEnd": "Creates a climate of fearless communication, integrates varied perspectives, and simplifies collaboration across organizational boundaries.",
              "developingEnd": "May gather input selectively or protect team boundaries; grows by defining shared outcomes and decision practices with partner groups."
            },
            {
              "name": "Develops Talent",
              "topEnd": "Builds a learning culture, develops successors, creates stretch opportunities, and coaches talent intentionally.",
              "developingEnd": "May develop people opportunistically rather than systematically; improves through talent reviews, individual plans, and visible follow-up."
            },
            {
              "name": "Ensures Accountability",
              "topEnd": "Creates clear ownership, integrates metrics and feedback into work, and takes timely action when commitments are at risk.",
              "developingEnd": "May allow shifting expectations or uneven consequences; develops by standardizing goals, review rhythms, and recovery plans."
            }
          ],
          "dailyPicture": "A mature manager who scales performance through clear systems, strong talent practices, cross-team collaboration, customer insight, and dependable accountability."
        },
        {
          "name": "Foundational Executive",
          "category": "leadership",
          "status": "draft",
          "sourceSheet": "Leadership Personas- draft",
          "title": "FOUNDATIONAL EXECUTIVE | SENIOR MANAGER / DIRECTOR",
          "focus": "Scope: multiple teams or a function; success requires translating strategy, aligning leaders, and shaping systems and culture across boundaries.",
          "topEndLabel": "TOP END — 4 ADVANCING",
          "developingEndLabel": "DEVELOPING END — 1 DEVELOPING",
          "competencies": [
            {
              "name": "Strategic Mindset",
              "topEnd": "Uses differentiators, scenarios, market dynamics, and integrated choices to shape a viable long-term functional strategy.",
              "developingEnd": "May stay anchored in current plans or consider too few future scenarios; develops by testing assumptions and connecting functional choices to enterprise advantage."
            },
            {
              "name": "Drives Vision and Purpose",
              "topEnd": "Makes the vision, mission, values, and positive impact memorable and sustains commitment through resistance.",
              "developingEnd": "May explain priorities without connecting them to purpose; improves by consistently linking decisions, trade-offs, and outcomes to the broader mission."
            },
            {
              "name": "Action Oriented",
              "topEnd": "Creates an environment that rewards initiative, removes barriers, and mobilizes the function around opportunities and bold challenges.",
              "developingEnd": "May add approval layers or hesitate on difficult enterprise issues; develops by simplifying governance and naming timely decisions and owners."
            },
            {
              "name": "Self Development",
              "topEnd": "Anticipates future leadership needs, expands enterprise leadership ability, and shapes a culture that values growth.",
              "developingEnd": "May develop mainly for current responsibilities; grows by identifying future-context gaps and pursuing experiences that broaden enterprise perspective."
            },
            {
              "name": "Communicates Effectively",
              "topEnd": "Creates constructive forums, communicates major initiatives candidly, reaches audiences at every level, and promotes information flow.",
              "developingEnd": "May communicate through limited channels or with excessive caution; improves by creating dialogue, addressing concerns directly, and reinforcing messages consistently."
            },
            {
              "name": "Customer Focus",
              "topEnd": "Aligns resources to emerging needs, builds key partnerships, champions service urgency, and creates a customer-focused environment.",
              "developingEnd": "May remain removed from key customers or under-resource emerging needs; develops through direct customer contact and explicit resource trade-offs."
            },
            {
              "name": "Instills Trust",
              "topEnd": "Places organizational interests first, models transparency, builds dependability, and aligns actions with stated values across challenges.",
              "developingEnd": "May tolerate selective transparency or inconsistent commitments across teams; builds trust by addressing contradictions and making trade-offs visible."
            },
            {
              "name": "Collaborates",
              "topEnd": "Invites broad perspectives, creates fearless communication, and integrates viewpoints into functional decisions and strategies.",
              "developingEnd": "May rely on a narrow inner circle or defend functional interests; grows by broadening participation and visibly incorporating valid dissent."
            },
            {
              "name": "Develops Talent",
              "topEnd": "Builds a development-focused culture, mentors key talent, and ensures leadership pipelines support future capability.",
              "developingEnd": "May delegate development entirely to managers or focus only on immediate successors; improves by reviewing pipelines and personally sponsoring critical talent."
            },
            {
              "name": "Ensures Accountability",
              "topEnd": "Creates an environment where leaders take expectations seriously and ensures the function meets commitments.",
              "developingEnd": "May accept repeated misses or unclear ownership across teams; develops by establishing enterprise-level measures, review forums, and decisive corrective action."
            }
          ],
          "dailyPicture": "A strategic functional leader who connects vision to execution, aligns leaders and resources, develops organizational capability, and builds confidence across stakeholders."
        },
        {
          "name": "Enterprise Executive",
          "category": "leadership",
          "status": "draft",
          "sourceSheet": "Leadership Personas- draft",
          "title": "ENTERPRISE EXECUTIVE | VP / SVP",
          "focus": "Scope: enterprise or major business area; success is visible in direction, culture, portfolio choices, external partnerships, and sustained organizational outcomes.",
          "topEndLabel": "TOP END — 4 ADVANCING",
          "developingEndLabel": "DEVELOPING END — 1 DEVELOPING",
          "competencies": [
            {
              "name": "Strategic Mindset",
              "topEnd": "Continuously scans the future, integrates strategies across units, leverages differentiators, and updates direction to sustain advantage.",
              "developingEnd": "May rely on established strategy or allow unit plans to diverge; develops by establishing scenario reviews and making explicit enterprise choices and trade-offs."
            },
            {
              "name": "Drives Vision and Purpose",
              "topEnd": "Paints a compelling picture of impact, makes vision and values tangible, sustains optimism, and champions purpose through hardship.",
              "developingEnd": "May communicate strategy as targets and initiatives rather than meaning; improves by repeatedly connecting decisions and stories to purpose and stakeholder impact."
            },
            {
              "name": "Action Oriented",
              "topEnd": "Creates a culture that supports rapid, responsible action and boldly redirects the organization toward high-value opportunities.",
              "developingEnd": "May permit bureaucracy, risk avoidance, or slow escalation; develops by removing structural barriers and rewarding well-judged initiative."
            },
            {
              "name": "Self Development",
              "topEnd": "Anticipates how industry shifts change leadership needs, expands enterprise range, and accelerates a culture of continuous development.",
              "developingEnd": "May depend on past leadership strengths; grows through external perspective, candid feedback, and deliberate practice for future enterprise challenges."
            },
            {
              "name": "Communicates Effectively",
              "topEnd": "Drives a free flow of information, communicates major choices with candor, and builds understanding and commitment across all levels.",
              "developingEnd": "May over-control messaging or communicate unevenly across audiences; improves through transparent forums, listening mechanisms, and consistent leadership narratives."
            },
            {
              "name": "Customer Focus",
              "topEnd": "Champions customers in enterprise decisions, secures resources for current and emerging needs, and builds deep strategic partnerships.",
              "developingEnd": "May become too internally focused or treat customer insight as delegated work; develops through direct relationships and customer evidence in portfolio decisions."
            },
            {
              "name": "Instills Trust",
              "topEnd": "Puts the organization’s interests first, models truth and transparency, and creates an enterprise reputation for honoring difficult commitments.",
              "developingEnd": "May allow exceptions for influence or short-term results; builds trust by applying values consistently and owning enterprise-level misses publicly."
            },
            {
              "name": "Collaborates",
              "topEnd": "Creates enterprise mechanisms for broad perspective, constructive challenge, and integrated decisions across functions and geographies.",
              "developingEnd": "May optimize one business area or depend on a small circle; grows by creating shared governance and rewarding enterprise outcomes over local wins."
            },
            {
              "name": "Develops Talent",
              "topEnd": "Shapes a culture of learning, mentors pivotal leaders, strengthens succession depth, and aligns talent investment with strategy.",
              "developingEnd": "May focus succession on a few visible roles or immediate vacancies; improves by reviewing enterprise capability gaps and sponsoring diverse pipelines."
            },
            {
              "name": "Ensures Accountability",
              "topEnd": "Builds enterprise accountability for commitments, aligns measures to strategy, and intervenes decisively when performance or values are at risk.",
              "developingEnd": "May tolerate ambiguous ownership or repeated exceptions; develops by simplifying priorities, making accountabilities visible, and acting consistently on results and conduct."
            }
          ],
          "dailyPicture": "An enterprise leader who shapes a compelling future, makes integrated choices, builds organizational confidence and capability, and mobilizes the system around customers and commitments."
        }
      ]
    }
  },
  "playbook": {
    "source": "Director_Champion_Playbook FINAL(1).docx",
    "sections": [
      {
        "title": "Front matter",
        "blocks": [
          {
            "type": "paragraph",
            "style": "Kicker",
            "text": "NEW COMPETENCY IMPLEMENTATION"
          },
          {
            "type": "paragraph",
            "style": "Title0",
            "text": "Director Champion Playbook"
          },
          {
            "type": "paragraph",
            "style": "Subtitle",
            "text": "Leading the change — Reinforcing the message — Preparing the organization"
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "Executive Summary"
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "Southwest Gas is replacing a framework of roughly 50 competencies, spread unevenly across levels, with a focused new model:"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Five core competencies for all employees,"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Five + three for people leaders, and"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Five + three + two for senior leaders."
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "Talent Acquisition has used the new model since January 2026 in hiring processes. The focus for the rest of 2026 is awareness, understanding, and application of these new competencies — not evaluation."
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "Two boundaries shape every conversation you will have with your teams: the new competency model and definitions are final, while the supporting behaviors, rating labels, scale design, and evaluation process are still being designed. When a question crosses that line, acknowledge it and route it rather than filling in the gap."
          },
          {
            "type": "table",
            "rows": [
              [
                "",
                "What we need from you by October 30\nComplete your cascade discussions with your leadership team and managers, using the 30-minute agenda and discussion prompts in Section 7. \nThis playbook is a working reference, not a script. How far you take it beyond the ask is your call.\nGOOD — Read the playbook and understand its contents, so you know what has been decided and what has not. (Sections 1–4)\nBETTER —And talk with your leadership team about the new competency model so the language starts circulating. (Sections 5, 6, and 8)\nBEST — And host targeted meetings with your leadership team and managers using the discussion guide in Section 7. (Sections 7, 9, and 10)\nIf a question comes up that you cannot answer and to be consistent companywide, please contact Erin Henlin or Rusty Goodwill."
              ]
            ]
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "How to navigate this playbook\nThis is a reference document rather than a cover-to-cover read. The Table of Contents is linked — click any entry to jump straight to that section. Four sections carry most of the weight: Section 4, What is Changing and What is Not; Section 5, What You Can Share Today; Section 7 for the 30-minute cascade agenda; and Section 8 for answers to the questions your teams are most likely to ask."
          }
        ]
      },
      {
        "title": "1. Why This Matters",
        "blocks": [
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "Purpose of this playbook"
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "This playbook prepares Directors to"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Understand the implementation strategy for the new competency model,"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "communicate consistently with leadership teams,"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "reinforce key messages without getting ahead of decisions still under design,"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "champion behavior adoption, and"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "support employee readiness for future implementation."
          },
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "Why we are introducing new competencies"
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "Southwest Gas is creating a more integrated talent system built around a new, common competency framework that will eventually support performance management, talent development, succession planning, leadership development, talent reviews, and selection. The long-term goal is greater consistency in expectations, development, and talent decisions across the organization."
          },
          {
            "type": "table",
            "rows": [
              [
                "",
                "Already in use — Talent Acquisition\nTalent Acquisition adopted the new competency model in January 2026, using it to shape interview guides and selection criteria. Candidates entering the organization are already being assessed against the same competencies we are socializing now — the model is not theoretical, and the language Directors use with their teams should match the language already in use at the front door of the organization."
              ]
            ]
          },
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "Important! Why socialize before implementation?"
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "We are intentionally introducing the new competencies before formal implementation so leaders and employees can become familiar with the language, understand expectations, practice applying the concepts, and build comfort before they become part of formal talent processes. The current focus is awareness, understanding, and application — not evaluation."
          }
        ]
      },
      {
        "title": "2. What Is Our Current State?",
        "blocks": [
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "We currently use roughly 50 competencies across all levels of the organization. The model looks comprehensive, but its structure works against the very goals it was meant to support — starting with how unevenly the competencies are distributed."
          },
          {
            "type": "table",
            "rows": [
              [
                "Level",
                "#",
                "Relative load"
              ],
              [
                "Officers",
                "5",
                "█████"
              ],
              [
                "Directors",
                "11",
                "███████████"
              ],
              [
                "Senior Managers & Managers",
                "10",
                "██████████"
              ],
              [
                "Supervisors",
                "10",
                "██████████"
              ],
              [
                "Exempt employees",
                "9",
                "█████████"
              ],
              [
                "Non-Exempt employees (core)",
                "5",
                "█████"
              ],
              [
                "What this structure creates",
                "What this structure creates",
                "What this structure creates"
              ],
              [
                "Inverted accountability",
                "Inverted accountability",
                "Directors carry more competencies than any other level, creating the impression that leadership accountability decreases as authority increases."
              ],
              [
                "Uneven standards",
                "Uneven standards",
                "Employees at adjacent levels are evaluated against different standards for substantially similar work."
              ],
              [
                "Diluted focus",
                "Diluted focus",
                "Managers cannot meaningfully assess or coach against this many expectations, so ratings drift toward generic scoring rather than genuine development."
              ],
              [
                "Inconsistent application",
                "Inconsistent application",
                "Some non-exempt roles carry more than 10 competencies depending on the job, undermining the \"core\" designation of their role and making equitable comparison difficult."
              ]
            ]
          },
          {
            "type": "table",
            "rows": [
              [
                "",
                "The bottom line\nThe current framework is heavy to administer, hard to communicate, and unreliable as a basis for performance decisions."
              ]
            ]
          }
        ]
      },
      {
        "title": "3. The Director’s Role in the Change",
        "blocks": [
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "Employees will primarily learn this change from their leaders, supported by HR When a Director is educated in and consistently models the new competencies, it stops feeling like an HR initiative and starts feeling like how we should lead. This is the biggest driver of successfully implementing change."
          },
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "Director champion responsibilities"
          },
          {
            "type": "table",
            "rows": [
              [
                "Responsibility",
                "Approach"
              ],
              [
                "Communicate",
                "Use consistent, high-level messaging. Avoid filling in details still being designed."
              ],
              [
                "Model",
                "Demonstrate the new competencies in daily leadership — especially the senior-leader competencies."
              ],
              [
                "Coach",
                "Use the new competencies in development and feedback conversations."
              ],
              [
                "Reinforce",
                "Recognize the new competencies in action when you observe them."
              ],
              [
                "Prepare",
                "Help managers understand what is coming — and what is not yet finalized."
              ]
            ]
          }
        ]
      },
      {
        "title": "4. What Is Changing and What Is Not",
        "blocks": [
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "Clarity about what is finalized and what is still being designed is a critical thing toshare right now."
          },
          {
            "type": "table",
            "rows": [
              [
                "✓  Finalized\nNew competency model\nNew competency definitions\nStages of contribution framework\nImplementation direction & sequencing\nUse of the new model in Talent Acquisition (live since Jan 2026)\n",
                "",
                "✕  Still being designed\nNew competency behaviors\nExempt and Non-Exempt stage labels\nRating labels\nPerformance scale design\nDetailed evaluation process\nFinal appraisal experience\nSystem configuration details\n"
              ]
            ]
          },
          {
            "type": "table",
            "rows": [
              [
                "",
                "Hold the line on what isn’t settled\nMost anxiety comes from speculation about ratings and scoring. If it isn’t on the finalized list, acknowledge the question and route it — don’t guess."
              ]
            ]
          }
        ]
      },
      {
        "title": "5. What Directors Can Share Today",
        "blocks": [
          {
            "type": "table",
            "rows": [
              [
                "",
                "Key message\nThe new competency model and definitions have been finalized; the supporting behaviors for each competency are still being refined. This period of awareness and socialization is so leaders and employees can understand the expectations before the new competencies become integrated into formal talent processes."
              ]
            ]
          },
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "Key talking points"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "The new competencies are a common language for success."
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "The new competencies describe how work gets done."
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "The new competencies will support future talent processes."
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Talent Acquisition has used the new model since January 2026 — new hires are already selected against the new competencies."
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Socialization starts now; more detailed training occurs in 2027."
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Formal implementation comes later (Nov 2027 and Apr 2028)."
          },
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "What to avoid discussing"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Future rating labels."
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Evaluation scoring and exact appraisal calculations."
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Final scale decisions."
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Detailed performance-process mechanics."
          }
        ]
      },
      {
        "title": "6. Understanding the New Competency Model",
        "blocks": [
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "New competency model overview"
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "The new model has five core competencies for all employees, people leaders carry three more, and senior leaders carry two beyond that. Definitions are provided below."
          },
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "New competency definitions"
          },
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "Stages of contribution"
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "Stages of contribution describe how expectations under the new competency model grow as employees take on broader responsibility, complexity, and influence."
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "They help employees and leaders understand what effective behavior looks like at different points in a role or career path — from contributing through individual work, to leading others, to shaping direction companywide."
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "These stages are intended to create clarity and consistency in development conversations, not to serve as rating labels or performance scores."
          },
          {
            "type": "table",
            "rows": [
              [
                "Stage",
                "Employee level",
                "Focus",
                "Primary contribution"
              ],
              [
                "Contributing to the Work",
                "Non-Exempt Traditional and Step",
                "Reliable execution and applied skill",
                "Delivering the day-to-day work the organization depends on"
              ],
              [
                "Contributing Through Ownership",
                "Exempt",
                "Accountability and depth of expertise",
                "Owning projects and outcomes end to end"
              ],
              [
                "Contributing Through Others",
                "People Leaders (Supervisors and Managers)",
                "Leadership and collaboration",
                "Guiding, developing talent, and representing the organization"
              ],
              [
                "Contributing Strategically",
                "Senior Leaders (Senior Managers, Directors, and Officers)",
                "Vision and strategic influence",
                "Shaping strategy and culture, defining direction, and influencing high-level outcomes"
              ]
            ]
          }
        ]
      },
      {
        "title": "7. Director Cascade Discussion Guide",
        "blocks": [
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "Use this 30-minute agenda to bring the change to your leadership team."
          },
          {
            "type": "table",
            "rows": [
              [
                "Segment",
                "Time",
                "Focus"
              ],
              [
                "Context",
                "5 min",
                "Why we are introducing new competencies"
              ],
              [
                "What we know today",
                "5 min",
                "What is finalized vs. still being designed"
              ],
              [
                "Leadership discussion",
                "15 min",
                "Which of the new competencies align to our work; which need more focus; anticipated team questions"
              ],
              [
                "Commitment",
                "5 min",
                "One way I will help reinforce adoption of the new competencies"
              ]
            ]
          },
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "Discussion prompts"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Which of the new competencies align most closely with our team’s work?"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Which of the new competencies already show up regularly?"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "Which of the new competencies deserve greater focus?"
          },
          {
            "type": "paragraph",
            "style": "List Paragraph",
            "text": "What questions do we anticipate from our teams — and where should we avoid getting ahead of unfinished details?"
          }
        ]
      },
      {
        "title": "8. Frequently Asked Questions",
        "blocks": [
          {
            "type": "table",
            "rows": [
              [
                "Question",
                "Answer"
              ],
              [
                "Are the new competencies finalized?",
                "The new competency model and definitions are finalized. The supporting behaviors for each new competency are still being refined, so use them for awareness and discussion rather than as final expectations."
              ],
              [
                "How many of the new competencies will apply to my role?",
                "Five new core competencies apply to everyone. People leaders carry three more; senior leaders carry two beyond that."
              ],
              [
                "Why are we reducing the number of competencies?",
                "The current model carries roughly 50 competencies, distributed unevenly across levels. That volume is difficult for managers to coach against and apply consistently. The new model is far more focused."
              ],
              [
                "Are stages of contribution the same as performance ratings?",
                "No. Stages describe how expectations grow with responsibility and complexity. They support development conversations — they are not rating labels or performance scores."
              ],
              [
                "Are ratings finalized?",
                "No. Rating labels and scale decisions may still change."
              ],
              [
                "Is this changing performance reviews immediately?",
                "No. Current activity focuses on awareness and socialization. The 2026 evaluation cycle launching in November proceeds under the existing process/competency model. The new competencies are not part of this year's evaluation but will become part of formal evaluation at full implementation — November 2027 for Exempt and Non-Exempt Traditional employees, and April 2028 for Non-Exempt Step employees."
              ],
              [
                "Will everyone move to the new competencies at the same time?",
                "No. Exempt and Non-Exempt Traditional employees move to full implementation in November 2027. Non-Exempt Step employees follow in April 2028."
              ],
              [
                "When will we receive more training?",
                "Additional training and readiness activities are planned during 2027."
              ],
              [
                "Is the new model being used anywhere today?",
                "Yes. Talent Acquisition adopted the new model in January 2026 for interview guides and selection criteria."
              ],
              [
                "If Talent Acquisition is already using the new model, why isn't everyone?",
                "Selection was the first process ready to adopt the new model. Performance management requires rating scales and system configuration that are still being designed, which is why it follows in 2027 and 2028."
              ],
              [
                "What should I do if my team asks about ratings or scoring?",
                "Acknowledge the question, confirm those decisions are still in design, and route it to Talent Development. Speculation is what creates anxiety."
              ],
              [
                "Who should I contact if I cannot answer a question?",
                "Erin Henlin or Rusty Goodwill."
              ]
            ]
          }
        ]
      },
      {
        "title": "9. Implementation Timeline",
        "blocks": [
          {
            "type": "table",
            "rows": [
              [
                "When",
                "Phase",
                "Applies to / focus"
              ],
              [
                "Jan 2026",
                "New competency model adopted in Talent Acquisition (complete)",
                "Candidates and hiring leaders / Interview guides and selection criteria aligned to the new competencies."
              ],
              [
                "Sept 2026",
                "Begin awareness & socialization through Director Cascade Discussions",
                "Directors and leadership teams / Introduce the new competencies and build a common language."
              ],
              [
                "Oct 2026",
                "Wrap up Director Cascade Discussions by October 30",
                "Managers and supervisors / Complete team cascades."
              ],
              [
                "Nov 2026",
                "2026 evaluation cycle launches for Exempt and Non-Exempt Traditional (NXT) employees",
                "Exempt, NXT employees and their leaders / Complete 2026 evaluations under the existing process/competency model; the new competencies are not part of this cycle."
              ],
              [
                "Dec 2026",
                "All employee communication about the change",
                "All employees / Communication to notify all employees that evaluations will be changing — beginning in November 2027 for Exempt and Non-Exempt Traditional employees, and in April 2028 for Non-Exempt Step employees."
              ],
              [
                "2027",
                "Training & readiness",
                "All employees / Deepen understanding; prepare leaders and employees; practice application."
              ],
              [
                "Nov 2027",
                "Full implementation",
                "Exempt and Non-Exempt Traditional employees."
              ],
              [
                "Apr 2028",
                "Full implementation",
                "Non-Exempt Step employees."
              ]
            ]
          },
          {
            "type": "table",
            "rows": [
              [
                "",
                "Protect the runway\nIntentional socialization in 2026 is what makes 2027 implementation credible. Building familiarity now reduces friction later."
              ]
            ]
          }
        ]
      },
      {
        "title": "10. Director Champion Checklist",
        "blocks": [
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "Complete by October 30"
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "☐   Complete cascade discussions with your leadership team and managers by October 30, using the 30-minute agenda and discussion prompts in Section 7. It is not required to report back to HR, but it is encouraged to follow-up with your Vice President."
          },
          {
            "type": "paragraph",
            "style": "Heading 2",
            "text": "Monthly actions through 2027"
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "☐   Discuss one of the new competencies during a leadership meeting."
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "☐   Recognize a new competency in action in the moment."
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "☐   Connect team work to organizational strategy."
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "☐   Use the new competency language in a coaching discussion."
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "☐   Share questions and feedback with Talent Development as they come up."
          },
          {
            "type": "paragraph",
            "style": "Normal",
            "text": "☐   Reinforce what is known versus what is still being designed."
          },
          {
            "type": "table",
            "rows": [
              [
                "",
                "When in doubt, route it\nIf a question goes beyond finalized content, acknowledge it, hold the line, and contact Erin Henlin or Rusty Goodwill so answers stay consistent across the company."
              ]
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Are the new competencies finalized?",
        "answer": "The new competency model and definitions are finalized. The supporting behaviors for each new competency are still being refined, so use them for awareness and discussion rather than as final expectations."
      },
      {
        "question": "How many of the new competencies will apply to my role?",
        "answer": "Five new core competencies apply to everyone. People leaders carry three more; senior leaders carry two beyond that."
      },
      {
        "question": "Why are we reducing the number of competencies?",
        "answer": "The current model carries roughly 50 competencies, distributed unevenly across levels. That volume is difficult for managers to coach against and apply consistently. The new model is far more focused."
      },
      {
        "question": "Are stages of contribution the same as performance ratings?",
        "answer": "No. Stages describe how expectations grow with responsibility and complexity. They support development conversations — they are not rating labels or performance scores."
      },
      {
        "question": "Are ratings finalized?",
        "answer": "No. Rating labels and scale decisions may still change."
      },
      {
        "question": "Is this changing performance reviews immediately?",
        "answer": "No. Current activity focuses on awareness and socialization. The 2026 evaluation cycle launching in November proceeds under the existing process/competency model. The new competencies are not part of this year's evaluation but will become part of formal evaluation at full implementation — November 2027 for Exempt and Non-Exempt Traditional employees, and April 2028 for Non-Exempt Step employees."
      },
      {
        "question": "Will everyone move to the new competencies at the same time?",
        "answer": "No. Exempt and Non-Exempt Traditional employees move to full implementation in November 2027. Non-Exempt Step employees follow in April 2028."
      },
      {
        "question": "When will we receive more training?",
        "answer": "Additional training and readiness activities are planned during 2027."
      },
      {
        "question": "Is the new model being used anywhere today?",
        "answer": "Yes. Talent Acquisition adopted the new model in January 2026 for interview guides and selection criteria."
      },
      {
        "question": "If Talent Acquisition is already using the new model, why isn't everyone?",
        "answer": "Selection was the first process ready to adopt the new model. Performance management requires rating scales and system configuration that are still being designed, which is why it follows in 2027 and 2028."
      },
      {
        "question": "What should I do if my team asks about ratings or scoring?",
        "answer": "Acknowledge the question, confirm those decisions are still in design, and route it to Talent Development. Speculation is what creates anxiety."
      },
      {
        "question": "Who should I contact if I cannot answer a question?",
        "answer": "Erin Henlin or Rusty Goodwill."
      }
    ],
    "timeline": [
      {
        "when": "Jan 2026",
        "phase": "New competency model adopted in Talent Acquisition (complete)",
        "focus": "Candidates and hiring leaders / Interview guides and selection criteria aligned to the new competencies."
      },
      {
        "when": "Sept 2026",
        "phase": "Begin awareness & socialization through Director Cascade Discussions",
        "focus": "Directors and leadership teams / Introduce the new competencies and build a common language."
      },
      {
        "when": "Oct 2026",
        "phase": "Wrap up Director Cascade Discussions by October 30",
        "focus": "Managers and supervisors / Complete team cascades."
      },
      {
        "when": "Nov 2026",
        "phase": "2026 evaluation cycle launches for Exempt and Non-Exempt Traditional (NXT) employees",
        "focus": "Exempt, NXT employees and their leaders / Complete 2026 evaluations under the existing process/competency model; the new competencies are not part of this cycle."
      },
      {
        "when": "Dec 2026",
        "phase": "All employee communication about the change",
        "focus": "All employees / Communication to notify all employees that evaluations will be changing — beginning in November 2027 for Exempt and Non-Exempt Traditional employees, and in April 2028 for Non-Exempt Step employees."
      },
      {
        "when": "2027",
        "phase": "Training & readiness",
        "focus": "All employees / Deepen understanding; prepare leaders and employees; practice application."
      },
      {
        "when": "Nov 2027",
        "phase": "Full implementation",
        "focus": "Exempt and Non-Exempt Traditional employees."
      },
      {
        "when": "Apr 2028",
        "phase": "Full implementation",
        "focus": "Non-Exempt Step employees."
      }
    ],
    "cascadeAgenda": [
      {
        "segment": "Context",
        "time": "5 min",
        "focus": "Why we are introducing new competencies"
      },
      {
        "segment": "What we know today",
        "time": "5 min",
        "focus": "What is finalized vs. still being designed"
      },
      {
        "segment": "Leadership discussion",
        "time": "15 min",
        "focus": "Which of the new competencies align to our work; which need more focus; anticipated team questions"
      },
      {
        "segment": "Commitment",
        "time": "5 min",
        "focus": "One way I will help reinforce adoption of the new competencies"
      }
    ],
    "responsibilities": [
      {
        "name": "Communicate",
        "approach": "Use consistent, high-level messaging. Avoid filling in details still being designed."
      },
      {
        "name": "Model",
        "approach": "Demonstrate the new competencies in daily leadership — especially the senior-leader competencies."
      },
      {
        "name": "Coach",
        "approach": "Use the new competencies in development and feedback conversations."
      },
      {
        "name": "Reinforce",
        "approach": "Recognize the new competencies in action when you observe them."
      },
      {
        "name": "Prepare",
        "approach": "Help managers understand what is coming — and what is not yet finalized."
      }
    ],
    "stages": [
      {
        "stage": "Contributing to the Work",
        "employeeLevel": "Non-Exempt Traditional and Step",
        "focus": "Reliable execution and applied skill",
        "primaryContribution": "Delivering the day-to-day work the organization depends on"
      },
      {
        "stage": "Contributing Through Ownership",
        "employeeLevel": "Exempt",
        "focus": "Accountability and depth of expertise",
        "primaryContribution": "Owning projects and outcomes end to end"
      },
      {
        "stage": "Contributing Through Others",
        "employeeLevel": "People Leaders (Supervisors and Managers)",
        "focus": "Leadership and collaboration",
        "primaryContribution": "Guiding, developing talent, and representing the organization"
      },
      {
        "stage": "Contributing Strategically",
        "employeeLevel": "Senior Leaders (Senior Managers, Directors, and Officers)",
        "focus": "Vision and strategic influence",
        "primaryContribution": "Shaping strategy and culture, defining direction, and influencing high-level outcomes"
      }
    ],
    "images": [
      {
        "path": "image1.png",
        "description": "embedded model graphic; inspect if using"
      },
      {
        "path": "image2.png",
        "description": "competency definitions at a glance; graphic uses abridged wording for some definitions; use workbook B2 for canonical detail"
      },
      {
        "path": "image3.jpeg",
        "description": "embedded graphic; inspect if using"
      }
    ],
    "keyBoundaries": {
      "finalized": [
        "New competency model",
        "New competency definitions",
        "Stages of contribution framework",
        "Implementation direction and sequencing",
        "Use in Talent Acquisition since January 2026"
      ],
      "stillInDesign": [
        "New competency behaviors",
        "Exempt and Non-Exempt stage labels",
        "Rating labels",
        "Performance scale design",
        "Detailed evaluation process",
        "Final appraisal experience",
        "System configuration details"
      ]
    }
  },
  "development": [
    {
      "id": "action-oriented",
      "why": [
        "Work moves forward when someone turns an issue, decision, or opportunity into a clear next action. At Southwest Gas, a delayed administrative handoff can affect another team’s schedule just as an unfinished field record can leave the next person without information. Action Oriented means recognizing what matters, starting at the right time, and carrying the work forward within your responsibilities.",
        "Productive urgency includes judgment. Confirm the outcome, identify the people and approvals needed, and make progress without bypassing established safety, quality, or authorization requirements. As responsibility grows, the emphasis moves from completing your own work to helping teams and the organization act with confidence. The useful evidence is progress on meaningful work, with reliable follow-through and timely escalation when an obstacle exceeds your authority."
      ],
      "essentials": [
        {
          "title": "Turn the issue into a next action",
          "text": "Name the result that is needed and the smallest useful action you can take now. Replace a vague intention such as ‘work on the backlog’ with a defined step, an owner, and a time to check progress. Make the step specific enough that another person would know whether it happened."
        },
        {
          "title": "Start with the real deadline",
          "text": "Work backward from when the next person needs your output. Include time for clarification, review, and correction, particularly when another department or location must contribute. Starting early creates room to resolve uncertainty before it becomes a last-minute emergency."
        },
        {
          "title": "Separate initiative from authority",
          "text": "Know what you can decide, what requires approval, and when a specialist needs to be involved. You can still gather facts, prepare options, or identify the right decision-maker while waiting for approval. Initiative should make the approved process work better."
        },
        {
          "title": "Make progress visible",
          "text": "Tell affected people what has moved, what remains blocked, and what you need from them. A short, useful update can prevent duplicate effort and unnecessary checking. Close the loop when the action is complete so others can confidently proceed."
        }
      ],
      "growth": "Choose one recurring point where work stalls: getting started, making a decision, asking for help, or completing a handoff. For several work cycles, practice a specific alternative and record what changed in timeliness, rework, or the next person’s ability to act. Ask a colleague to check whether your greater urgency also preserved accuracy and cooperation. Increase the complexity of the assignment only after the new habit is dependable.",
      "related": [
        "ensures-accountability",
        "collaborates",
        "communicates-effectively"
      ],
      "roles": {
        "non_exempt": {
          "focus": "Keep assigned work moving through timely starts, clear confirmation, and dependable action. Use established instructions and your authorized responsibilities to decide what to complete independently and what to raise for help.",
          "good": "You approach assigned tasks constructively, confirm unclear requirements, start in time to meet the need, and complete familiar work without repeated reminders. You let the right person know when an obstacle could affect delivery.",
          "great": "You notice predictable delays early, prepare what is needed before the work reaches you, and help the next person proceed smoothly. Your initiative makes routine work more dependable while keeping required checks and decision boundaries intact.",
          "watch": [
            "Agreeing enthusiastically but leaving the task unstarted until someone checks on it.",
            "Starting before you understand the requested output, then creating avoidable rework.",
            "Waiting for permission on familiar assigned work while missing the point when an exception needs escalation."
          ],
          "examples": [
            "When an administrative schedule changes, an employee acknowledges the disruption, offers a practical way to reorganize the assigned work, and helps the group get started without dwelling on what went wrong.",
            "Before preparing a completed-work summary, an employee confirms the reporting period, required information, and recipient, then produces the summary using the agreed source and format.",
            "For a monthly records deadline, an employee begins gathering the required documents early enough to request missing information and allow the usual review before the cutoff.",
            "An employee completes familiar, assigned record updates using the established checklist, shares the completion status, and brings forward only the exceptions that need a leader’s decision."
          ],
          "practice": [
            {
              "title": "Build a backward start plan",
              "action": "Choose a recurring deadline. List the information, preparation, and review needed before it, then set your start date. After the next cycle, note which dependency took longer than expected and revise the plan with your leader if needed.",
              "evidence": "A completed assignment with enough time for review and a record of any missing information raised early."
            },
            {
              "title": "Confirm once, then act",
              "action": "For a new assignment, repeat back the outcome, due time, and any approval boundaries. Carry out the agreed next step, then compare your result with the request. Notice which questions prevented rework and which were unnecessary repeats.",
              "evidence": "The agreed output and one example of a clarification that helped you complete it correctly."
            },
            {
              "title": "Track one recurring delay",
              "action": "For several shifts or workdays, note where one assigned task waits. Identify a preparation step you can take within your role, discuss it with your leader, and try it during the next cycle.",
              "evidence": "A before-and-after example showing less waiting without missed checks or extra work for someone else."
            }
          ],
          "questions": [
            "Which task do I tend to postpone, and what is the first useful step I could schedule earlier?",
            "Where do I need clearer expectations to work more independently?",
            "When I finish my part, does the next person have what they need to act?"
          ]
        },
        "exempt": {
          "focus": "Take ownership of issues and opportunities that require judgment across several steps or stakeholders. Move from analysis to a useful action at the right time, and stay involved when the first solution encounters a problem.",
          "good": "You identify important issues promptly, propose a practical response, and begin the work without avoiding difficult conversations or uncertain assignments. When a problem emerges, you coordinate a response and keep affected people informed.",
          "great": "You recognize opportunities before they become obvious requests, test workable options with the right partners, and sustain momentum through obstacles. Your actions resolve the immediate issue and improve how similar work is handled next time.",
          "watch": [
            "Extending analysis after enough evidence exists to take a sensible next step.",
            "Choosing visible, easier tasks while a difficult dependency continues to delay the project.",
            "Starting several improvements without confirming capacity or closing the work already underway."
          ],
          "examples": [
            "An analyst finds conflicting figures in a report needed for a leadership discussion. They promptly identify the discrepancy, involve the data owner, and establish what can be verified before the meeting.",
            "After several departments request similar information, a specialist recognizes an opportunity for a shared intake format, drafts a small example, and brings the relevant owners together to consider a practical trial.",
            "A project owner sees that a milestone cannot be met with the current scope. They arrange the difficult discussion about priorities and dependencies early, bringing options for a decision instead of postponing it.",
            "When a training registration process stops working, the coordinator promptly works with the responsible team, communicates the effect to participants, and arranges an authorized way to keep registrations moving while the issue is resolved."
          ],
          "practice": [
            {
              "title": "Set an action threshold",
              "action": "Select a live assignment that is stuck in analysis. Identify what must be known before acting, what can be learned through a small approved step, and who needs to agree. Take that step and review what it revealed.",
              "evidence": "A decision note showing the necessary facts, the first action, and what changed as a result."
            },
            {
              "title": "Address the difficult dependency",
              "action": "Choose a dependency you have been reluctant to discuss. Prepare a neutral statement of the impact, two workable options, and the decision needed. Hold the conversation and document the agreed next action.",
              "evidence": "A clearer owner or decision, an agreed date, and progress on the previously delayed work."
            },
            {
              "title": "Convert a pattern into a trial",
              "action": "Look across recent requests for a repeated source of delay. With the process owner, propose a limited improvement, define how you will assess it, and test it within the agreed scope.",
              "evidence": "A small trial result showing whether response time, rework, or handoff quality improved."
            }
          ],
          "questions": [
            "What am I still analyzing that could move forward through one responsible action?",
            "Which opportunity would be lost if I waited for someone to assign it to me?",
            "When an obstacle appears, do I stay engaged until there is a workable next step?"
          ]
        },
        "people_leader": {
          "focus": "Create team momentum through clear priorities, timely decisions, and confidence in taking on unfamiliar work. Make it easier for employees to act by resolving obstacles, confirming authority, and balancing new opportunities with existing commitments.",
          "good": "You give people clear priorities and time expectations, respond to blocking questions, and encourage a constructive approach to challenges. You identify practical opportunities for the team and follow through on the decisions needed to pursue them.",
          "great": "Your team acts promptly without depending on constant reminders because responsibilities and decision boundaries are clear. Employees bring forward opportunities, take on sensible stretch work, and see that you provide the support needed to turn initiative into results.",
          "watch": [
            "Calling every request urgent and leaving employees to reconcile competing priorities.",
            "Asking for initiative while requiring your approval for every routine next step.",
            "Encouraging a can-do attitude without addressing workload, resources, or legitimate concerns."
          ],
          "examples": [
            "Before a department reporting deadline, a leader confirms owners and internal handoff dates, asks employees to surface blockers early, and makes the pending decisions that let the team continue its work.",
            "A leader notices repeated delays between a field support group and an office team. They bring the process owners together, evaluate a common handoff checklist, and sponsor a limited trial with clear responsibilities.",
            "When employees are discouraged by a process change, a leader acknowledges the extra effort, identifies a manageable first step, and recognizes useful ideas and progress while remaining available to solve problems.",
            "A leader invites the team to tackle an unfamiliar service improvement, assigns meaningful responsibilities, and establishes support and check-ins so employees can begin learning through the work rather than waiting for a perfect plan."
          ],
          "practice": [
            {
              "title": "Remove one decision bottleneck",
              "action": "Review recent tasks that waited for you. Identify which decisions genuinely required your involvement and which could be handled within an agreed boundary. Clarify that boundary with the employee and observe the next cycle.",
              "evidence": "Fewer avoidable approval waits and examples of appropriate independent action and escalation."
            },
            {
              "title": "Run a short action review",
              "action": "For one priority, meet briefly to confirm the next action, owner, due point, and obstacle. Use the discussion to make decisions or obtain support, then check whether it helped employees move the work forward.",
              "evidence": "Completed next steps and obstacles resolved, rather than a longer list of status updates."
            },
            {
              "title": "Sponsor a manageable challenge",
              "action": "Ask the team to identify one worthwhile improvement outside its routine. Agree on a limited scope, required partnerships, and time allowance. Support the first attempt and discuss both the result and what employees learned.",
              "evidence": "A completed trial, employee ownership of specific actions, and a decision about what to continue."
            }
          ],
          "questions": [
            "Where is my team waiting for a decision that I could make or clarify?",
            "How do employees know which priority should move first when requests compete?",
            "What have I done recently to make a new challenge feel achievable?"
          ]
        },
        "senior_leader": {
          "focus": "Build the conditions for timely organizational action. Align direction, decision authority, resources, and cross-functional cooperation so important opportunities and difficult challenges can move beyond discussion into accountable execution.",
          "good": "You set a clear direction, make timely decisions at your level, and visibly support leaders addressing difficult work. You help functions coordinate a response to opportunities and maintain a constructive tone when the path is uncertain.",
          "great": "The organization can respond quickly because decision responsibilities and strategic priorities are understood. You mobilize the right sponsors, remove persistent barriers, and sustain energy around ambitious work while preserving appropriate review and challenge.",
          "watch": [
            "Promoting speed while leaving overlapping authority or unresolved resource decisions in place.",
            "Announcing a bold initiative without changing priorities or identifying an accountable sponsor.",
            "Interpreting questions about risk or readiness as a lack of enthusiasm."
          ],
          "examples": [
            "A senior leader examines why cross-functional proposals repeatedly wait for decisions, clarifies sponsorship and decision ownership, and creates a dependable route for resolving issues that exceed a department’s authority.",
            "During a demanding organizational change, a senior leader explains the opportunity with conviction, acknowledges the effort involved, and follows through visibly on their own commitments so leaders have a constructive example to follow.",
            "When an opportunity arises to improve a recurring customer handoff across functions, a senior leader quickly convenes the accountable leaders, resolves competing priorities, and enables a coordinated response within the necessary approvals.",
            "A senior leader sponsors a substantial improvement spanning several departments, sets a clear outcome and decision milestones, and stays engaged when tradeoffs are needed to sustain progress on the challenge."
          ],
          "practice": [
            {
              "title": "Inspect the path from issue to decision",
              "action": "Trace one recent cross-functional issue from the first signal to the final decision. Ask the involved leaders where ownership was unclear or approvals repeated. Resolve one structural delay and review whether the next comparable issue moves more effectively.",
              "evidence": "A clarified decision path and a documented reduction in avoidable waiting or repeated escalation."
            },
            {
              "title": "Make a strategic priority actionable",
              "action": "Choose an important initiative and test whether its sponsor can explain the outcome, available capacity, key decisions, and escalation route. Resolve gaps at your level and agree on a small number of milestones that show actual progress.",
              "evidence": "A sponsor who can act, explicit priority tradeoffs, and milestones that demonstrate movement toward the outcome."
            },
            {
              "title": "Model constructive urgency",
              "action": "At the next leadership review of difficult work, name the challenge and opportunity, invite material concerns, and make the decisions within your authority. Afterward, ask participants whether your approach created clarity, confidence, and a workable next step.",
              "evidence": "Specific feedback about the meeting’s effect and actions that proceeded because a decision or barrier was resolved."
            }
          ],
          "questions": [
            "Which organizational barrier makes reasonable initiative unnecessarily difficult?",
            "Do my resource and priority decisions match the urgency I communicate?",
            "Where must I personally sponsor a difficult decision so leaders can move forward?"
          ]
        }
      },
      "tips": [
        {
          "title": "If you keep waiting, identify the missing condition",
          "body": "Ask what is actually preventing action: unclear expectations, unavailable information, a needed decision, lack of skill, or reluctance to have a difficult conversation. Each calls for a different response. Obtain the missing condition or take a useful preparatory step; do not let a vague sense of uncertainty become an indefinite delay."
        },
        {
          "title": "If everything is urgent, make the tradeoff visible",
          "body": "Compare the consequences and dependencies of competing requests. Confirm which outcome matters first and what must move if a new priority is added. A visible tradeoff is more useful than promising every requester the same deadline and allowing the conflict to emerge later."
        },
        {
          "title": "If enthusiasm fades, shorten the distance to progress",
          "body": "Break a difficult assignment into a first deliverable someone can complete and review. Agree on what would count as useful progress, provide the needed support, and recognize what the attempt teaches. Small completed steps can build confidence for the next challenge."
        },
        {
          "title": "If you act quickly, check who needs to come with you",
          "body": "Before moving, identify the person who owns the process, the people affected by the change, and any required review. Bring them into the right decision at the right time. Effective initiative reduces surprise and rework while preserving the ability to respond promptly."
        }
      ],
      "learningTopics": [
        "Prioritizing work through dependencies and consequences",
        "Making timely decisions within clear authority",
        "Moving an improvement from an idea to a limited trial"
      ],
      "reflections": [
        "What meaningful action did I take earlier than I would have a month ago, and what difference did it make?",
        "Where did my initiative help someone else move forward, and where did it create an avoidable surprise?",
        "Which recurring obstacle needs a clearer decision, better preparation, or a conversation rather than more effort?"
      ]
    },
    {
      "id": "self-development",
      "why": [
        "Roles change as systems, work expectations, customer needs, and organizational priorities evolve. Self-Development is the habit of noticing what you need to learn and taking deliberate steps to build it. At Southwest Gas, useful development might involve clearer analysis, more dependable coordination, better use of an approved system, or stronger leadership of people and change.",
        "Learning becomes valuable when it changes how you work. A class, conversation, observation, or challenging assignment is a starting point; practice, feedback, and reflection turn it into capability. Development also includes recognizing limits and asking for help. Progress is shown by a skill you can apply more effectively, a broader responsibility you can handle, or a leadership habit that others experience differently."
      ],
      "essentials": [
        {
          "title": "Choose a capability with a purpose",
          "text": "Connect a learning need to the work you want to improve or a responsibility you are preparing to take on. Describe the capability in observable terms, such as explaining an analysis clearly or leading a productive check-in, so you can tell whether practice is helping."
        },
        {
          "title": "Invite useful feedback",
          "text": "Ask someone who has seen your work for a specific observation and suggestion. A question about one meeting, handoff, or deliverable usually produces more useful guidance than asking whether you are doing well. Listen for the effect of your behavior before deciding how to respond."
        },
        {
          "title": "Practice in real work",
          "text": "Pair each learning activity with an appropriate opportunity to use the skill. Start within your current authority and obtain the support or supervision the assignment requires. Repeated application with feedback is more informative than simply recording that a learning activity was completed."
        },
        {
          "title": "Review and adapt the plan",
          "text": "Check whether the chosen activity is changing your performance. Keep the practice that helps, adjust what does not, and ask for a different kind of support when progress stalls. As your role or the organization changes, revisit the capability you need next."
        }
      ],
      "growth": "Begin with one capability that would noticeably improve your current work or prepare you for a realistic next responsibility. Agree on an observable goal, choose a learning source, and arrange several opportunities to practice. Ask for feedback on the actual work and compare early and later examples. Use that evidence to decide whether to deepen the skill, broaden the setting in which you apply it, or choose a new development priority.",
      "related": [
        "develops-talent",
        "action-oriented",
        "instills-trust"
      ],
      "roles": {
        "non_exempt": {
          "focus": "Ask for help, seek appropriate learning opportunities, and apply new knowledge to assigned work. Build confidence through guided practice and gradually more dependable performance within the responsibilities of your role.",
          "good": "You can name a skill you want to improve, ask the right person for help, and participate in relevant learning. You look for an appropriate chance to use the skill and respond constructively to feedback on your first attempts.",
          "great": "You actively connect feedback, learning, and repeated practice. You notice where a new skill could improve your assigned work, seek the support needed to apply it correctly, and can show how your performance has become more dependable.",
          "watch": [
            "Avoiding questions because asking for help feels like admitting a weakness.",
            "Collecting learning activities without choosing a skill to use on the job.",
            "Trying unfamiliar work independently before confirming the training, authorization, or supervision it requires."
          ],
          "examples": [
            "An employee asks their leader for feedback on organizing a busy workload and requests a chance to learn how an experienced colleague plans recurring deadlines.",
            "An employee identifies a need to improve spreadsheet accuracy, works through an appropriate learning activity, and practices on a nonproduction example before applying the approach to assigned reporting.",
            "An employee volunteers to observe an experienced coworker’s authorized customer handoff and asks questions about how they make the information clear and complete for the next person.",
            "After learning a better way to organize an administrative status update, an employee uses it on an assigned task, asks for review, and adjusts the next update based on the feedback."
          ],
          "practice": [
            {
              "title": "Ask a focused learning question",
              "action": "Choose one task you find difficult. Show your leader or an experienced colleague a recent example and ask what one change would make it more effective. Restate the advice and agree on a suitable opportunity to try it.",
              "evidence": "A specific suggestion, a completed practice attempt, and feedback on the change."
            },
            {
              "title": "Observe with a purpose",
              "action": "Arrange an appropriate observation of a coworker who performs a relevant task well. Decide in advance what you want to learn, note the choices they make, and discuss which parts apply to your own assignment.",
              "evidence": "Two useful observations and one agreed technique you can practice within your role."
            },
            {
              "title": "Keep a short application log",
              "action": "For a new skill, record a few occasions when you used it, what was difficult, and what feedback you received. Review the examples with your leader and choose the next adjustment rather than starting another unrelated learning activity.",
              "evidence": "Several work examples showing growing accuracy, confidence, or independence with the skill."
            }
          ],
          "questions": [
            "What do I need help learning, and who has seen enough of my work to guide me?",
            "Which new skill have I learned but not yet had an appropriate chance to practice?",
            "What can I do more dependably now than at the start of this development effort?"
          ]
        },
        "exempt": {
          "focus": "Take ownership of a deliberate development plan. Seek candid feedback, translate it into clear goals, apply new skills in meaningful work, and use additional responsibilities to broaden how you contribute.",
          "good": "You ask for feedback on specific work, define a development goal with practical actions, and create opportunities to apply what you learn. You seek broader responsibilities that fit a genuine capability gap and can explain the progress made.",
          "great": "You actively test your assumptions about your strengths and gaps, choose challenging applications, and adapt your plan using evidence. Broader responsibilities build capabilities that improve outcomes beyond the original assignment, without losing ownership of existing commitments.",
          "watch": [
            "Choosing development goals that sound impressive but have no clear application to your work.",
            "Requesting feedback mainly from people likely to agree with your own assessment.",
            "Taking on extra responsibilities without identifying what you intend to learn or what capacity is available."
          ],
          "examples": [
            "After presenting an analysis to business partners, an analyst asks which parts helped them make a decision and where the explanation was difficult to follow, then looks for a pattern across the feedback.",
            "A specialist sets a goal to lead clearer project scoping discussions, identifies facilitation techniques to study, schedules practice opportunities, and asks a colleague to observe the next discussion.",
            "After learning a method for summarizing survey findings, an employee applies it to an authorized project, checks the result with a knowledgeable reviewer, and refines the approach before using it again.",
            "An employee asks to coordinate a cross-functional planning activity beyond their usual individual contribution, clarifying the support and workload adjustments needed to build their coordination skills responsibly."
          ],
          "practice": [
            {
              "title": "Turn feedback into an observable goal",
              "action": "Gather feedback from two people who see different parts of your work. Choose a common theme, define the behavior you want to demonstrate, and identify a work product or interaction that will show improvement.",
              "evidence": "A clear development goal linked to feedback and a baseline example to compare later."
            },
            {
              "title": "Practice with an informed reviewer",
              "action": "Choose an upcoming deliverable where the new skill matters. Ask an experienced colleague to review a first attempt against the intended outcome, revise the work, and apply the lesson in a second assignment.",
              "evidence": "Two applications showing how feedback changed the quality or usefulness of the result."
            },
            {
              "title": "Design a stretch responsibility",
              "action": "Propose an additional responsibility that builds a specific skill. Agree with your leader on scope, time, decision boundaries, and support. Schedule a review focused on both the work outcome and what you learned.",
              "evidence": "A completed stretch assignment and concrete examples of capability you can now apply elsewhere."
            }
          ],
          "questions": [
            "Which feedback have I heard more than once without changing my practice?",
            "How will I know that my development goal has improved a real work outcome?",
            "What additional responsibility would stretch the right skill rather than simply increase my workload?"
          ]
        },
        "people_leader": {
          "focus": "Develop your own leadership in ways that support the organization’s direction and the needs of your team. Make learning visible through changed behavior, and seek assignments that expand how effectively you lead people and work.",
          "good": "Your development priorities connect to organizational goals and values. You seek feedback on your leadership, apply learning to everyday interactions, and take on a suitable challenge that builds an identified capability.",
          "great": "Employees and partners can describe how your leadership has improved because you invite their perspective and act on it. You make personal development a credible example, deliberately broaden your experience, and apply lessons across different team and business situations.",
          "watch": [
            "Creating development plans for employees while leaving your own leadership habits unexamined.",
            "Treating leadership learning as a private activity that never changes the team’s experience.",
            "Seeking a larger assignment or title without considering the leadership capability the experience should build."
          ],
          "examples": [
            "A leader connects a goal to improve change communication with the organization’s current priorities and stated values, identifies the leadership behavior they need to strengthen, and plans how to practice it with their team.",
            "A leader asks employees and peers for feedback on delegation, notices that responsibilities are sometimes unclear, and practices more complete handoffs with follow-up conversations about what improved.",
            "A leader learns a new way to facilitate problem-solving discussions, explains to the team what they are practicing, and invites feedback after applying it to a real department issue.",
            "A leader pursues a temporary cross-functional coordination assignment that requires influence beyond their own team, agreeing on coverage and coaching so the experience builds capability without neglecting current responsibilities."
          ],
          "practice": [
            {
              "title": "Link a leadership goal to the work",
              "action": "Identify an organizational priority that places a new demand on your leadership. Describe the behavior you need to improve, ask a partner or your leader to challenge the connection, and choose a near-term opportunity to practice.",
              "evidence": "A development goal tied to a real priority and observable changes in how you lead that work."
            },
            {
              "title": "Ask the team to notice one change",
              "action": "Choose a leadership habit such as listening, delegation, or follow-through. Tell the team what you are working on and invite specific feedback after several relevant interactions. Thank people for observations and explain what you will adjust.",
              "evidence": "Employee examples of a changed leadership behavior and a response to feedback that remained unresolved."
            },
            {
              "title": "Broaden your leadership setting",
              "action": "Arrange a suitable assignment that requires a capability less developed in your current role, such as coordinating across functions. Define the learning objective, support, and coverage; debrief the experience with a mentor or your leader.",
              "evidence": "Examples of decisions or relationships handled differently and a lesson applied back to the home team."
            }
          ],
          "questions": [
            "Which organizational goal exposes a gap in how I currently lead?",
            "What change in my leadership would my team say they have actually experienced?",
            "Where could a different assignment challenge the strengths I rely on most?"
          ]
        },
        "senior_leader": {
          "focus": "Anticipate the capabilities your leadership will require as the organization and industry change. Continue improving your own effectiveness while creating an environment where personal development is supported through time, experience, feedback, and opportunity.",
          "good": "You examine how emerging demands affect your own development needs, seek feedback on your leadership, and make purposeful learning choices. You support development across the organization and pursue an assignment that stretches your own capabilities.",
          "great": "You challenge familiar leadership approaches before they become limiting, visibly apply learning to consequential decisions, and align organizational conditions with a learning culture. Your own stretch experiences deepen your ability to lead across functions, uncertainty, and future demands.",
          "watch": [
            "Assuming extensive experience means the capabilities that brought success will meet every future demand.",
            "Encouraging development while consistently removing the time or opportunities needed to pursue it.",
            "Seeking external exposure without testing how the learning should change your own decisions and behavior."
          ],
          "examples": [
            "A senior leader considers how changes in workforce expectations and business technology will affect their own leadership, identifies a gap in asking informed questions, and seeks a learning plan with knowledgeable internal partners.",
            "A senior leader requests candid feedback on the clarity of strategic decisions, works with a trusted adviser to identify a recurring habit, and deliberately changes how they explain tradeoffs in later leadership discussions.",
            "A senior leader asks business leaders to make learning opportunities and application part of regular development discussions, protects capacity for agreed activities, and examines whether employees across locations can access meaningful experiences.",
            "A senior leader takes on sponsorship of an unfamiliar cross-functional initiative with a defined personal learning objective, seeks challenge from experienced partners, and uses the experience to strengthen how they lead beyond their usual area."
          ],
          "practice": [
            {
              "title": "Review your future leadership demands",
              "action": "Select two changes likely to affect the organization. With knowledgeable colleagues, examine how those changes alter what you personally need to understand or do well. Choose one development priority and connect it to an upcoming decision or responsibility.",
              "evidence": "A forward-looking capability goal and a concrete example of learning informing a leadership decision."
            },
            {
              "title": "Test the credibility of the learning culture",
              "action": "Ask leaders and employees where development is supported and where workload, access, or unclear expectations prevent it. Compare what you hear with the messages you send. Address one organizational barrier within your authority and review its effect.",
              "evidence": "A specific barrier resolved and evidence that people gained a practical opportunity to learn and apply a skill."
            },
            {
              "title": "Use a stretch role as a learning laboratory",
              "action": "Choose a challenging responsibility that requires you to lead in a less familiar setting. Define the capability to build, seek feedback from partners with different perspectives, and hold a debrief on what changed in your approach.",
              "evidence": "Feedback on a changed leadership practice and a lesson carried into another organizational decision."
            }
          ],
          "questions": [
            "Which future demand would challenge the way I have successfully led in the past?",
            "What signals do my scheduling, resource, and opportunity decisions send about development?",
            "Who can challenge my thinking candidly, and how have I acted on their feedback?"
          ]
        }
      },
      "tips": [
        {
          "title": "If the goal is vague, describe the work you want to do better",
          "body": "Replace a broad aim such as ‘improve leadership’ with an observable action in a real setting. Identify who will experience the change and what evidence they could provide. A precise goal helps you choose relevant learning and recognize progress without relying only on your own confidence."
        },
        {
          "title": "If feedback feels uncomfortable, ask for the example",
          "body": "Listen for the situation, behavior, and effect the person observed. Ask clarifying questions before explaining your intent. You do not need to accept every suggestion, but you do need to understand it. Choose a change to test and return later to ask whether the difference was noticeable."
        },
        {
          "title": "If learning stays theoretical, arrange the application first",
          "body": "Before starting a learning activity, identify a suitable task or interaction where you can use the skill. Confirm any approval, supervision, or workload adjustment needed. Schedule a feedback point after the first attempt so the activity leads into practice rather than ending with completion."
        },
        {
          "title": "If progress stalls, change the practice rather than abandon the goal",
          "body": "Look at whether the skill is too broad, practice is too infrequent, feedback comes too late, or the assignment does not actually require the new behavior. Adjust one condition and try again. A smaller practice opportunity or a different observer may reveal more than another lengthy learning activity."
        }
      ],
      "learningTopics": [
        "Turning specific feedback into an observable development goal",
        "Learning through supervised practice and stretch assignments",
        "Reflecting on experience and adapting a development plan"
      ],
      "reflections": [
        "What did I apply from a recent learning experience, and what changed in the work?",
        "Which piece of feedback am I most tempted to explain away, and what could I test instead?",
        "What capability would make the biggest difference to my contribution over the next several months?"
      ]
    },
    {
      "id": "communicates-effectively",
      "why": [
        "People depend on clear, timely information to coordinate work, understand decisions, and respond to customers. Communication is effective when the recipient understands what matters and what to do next. A useful update gives enough context to act and makes questions or unresolved issues visible.",
        "Listening is part of that work. Inviting a different perspective, checking what was understood, and following up on unanswered questions help people identify gaps before they become repeated work. Strong communicators adapt the detail and channel to the audience while keeping the facts and main message consistent."
      ],
      "essentials": [
        {
          "title": "Make the purpose clear",
          "text": "Start with the issue, decision, or action that matters to the recipient. Put supporting detail where it is easy to find."
        },
        {
          "title": "Listen for the full need",
          "text": "Let the other person finish, ask a focused question, and summarize your understanding before proposing a response."
        },
        {
          "title": "Invite another perspective",
          "text": "Ask what you may have missed. Consider a concern on its merits and explain how it affects the next step."
        },
        {
          "title": "Share information in time to use it",
          "text": "Identify who needs an update, when they need it, and what they must know. Make changes, risks, and unanswered questions visible."
        },
        {
          "title": "Match the audience and channel",
          "text": "Adjust language, detail, format, and delivery to the situation. Check understanding instead of assuming that sending a message completes the communication."
        }
      ],
      "growth": "The scope grows from dependable exchanges about daily work, to communication that supports projects and professional decisions, to dialogue across teams, and then to communication throughout the organization. Greater scope calls for more attention to competing information needs, consistency, and follow-through. The development examples below support practice; the portal's behavior statements and rating scale govern assessment.",
      "related": [
        "instills-trust",
        "customer-focus",
        "collaborates",
        "drives-vision-purpose"
      ],
      "roles": {
        "non_exempt": {
          "focus": "Keep daily work moving through timely updates, attentive listening, open responses, and the right amount of spoken detail.",
          "good": "Coworkers and customers receive information they can use. Instructions are understood, other viewpoints receive a thoughtful response, and explanations make the next step clear.",
          "great": "As a development stretch, anticipate likely questions, strengthen handoffs, and help others clarify a confusing exchange. These practices do not add a rating level to the employee's scale.",
          "watch": [
            "Waiting for a reminder before sharing an important change or unfinished item.",
            "Responding before understanding the instruction, concern, or suggestion.",
            "Giving too little context to act, or so much detail that the main point is lost."
          ],
          "examples": [
            "Before handing off an open request, update the record and tell the next person what is complete, what remains, and when action is needed.",
            "When receiving a revised procedure, summarize the key steps and ask about anything unclear before beginning the task.",
            "When a coworker suggests improving a handoff, ask how the change would help and raise the useful idea through the appropriate team process.",
            "Explain a customer's next step in plain language, including the relevant timing, then check whether they need more detail."
          ],
          "practice": [
            {
              "title": "Improve a recurring handoff",
              "action": "Choose a recurring request or task. Agree with the recipient on the information they need, use that structure in your next handoffs, and ask what remains unclear.",
              "evidence": "A completed handoff example and the recipient's feedback on whether they could identify the next action."
            },
            {
              "title": "Confirm before acting",
              "action": "During a new instruction or customer request, restate the need and next step in your own words. Invite corrections and incorporate them.",
              "evidence": "A brief note of a clarification that changed your understanding or prevented an incorrect next step."
            },
            {
              "title": "Make a short explanation useful",
              "action": "Prepare a routine process explanation for someone unfamiliar with it. Remove unexplained terms, practice with a peer, and revise where they need more context.",
              "evidence": "The revised explanation and the peer's description of what they would do next."
            }
          ],
          "questions": [
            "Which update did someone have to request because I had not shared it?",
            "What did I learn by checking my understanding before acting?",
            "When did another person's idea improve how I explained or completed the work?"
          ]
        },
        "exempt": {
          "focus": "Make professional or technical work understandable through clear messages, interested listening, useful updates, and complete written records.",
          "good": "Stakeholders understand the recommendation, its basis, and the next decision. Their input is heard, relevant updates arrive in time, and written records support continued work.",
          "great": "Explain complex issues with precision, connect information across a project, and anticipate the questions different stakeholders will need answered. Build documents that remain useful beyond the original conversation.",
          "watch": [
            "Using specialist terms or presenting analysis without a clear conclusion or request.",
            "Defending a recommendation before exploring the concern behind a question.",
            "Sharing risks late or leaving decisions and assumptions out of the written record."
          ],
          "examples": [
            "Present an analysis by stating the recommendation and its impact, then explain the supporting facts in language a nonspecialist stakeholder can follow.",
            "In a requirements discussion, ask how the proposed change affects the person's work and summarize that need before recommending a solution.",
            "When a project dependency changes, notify the affected stakeholders with the impact, available options, and the next update they can expect.",
            "Document a project decision with its rationale, relevant assumptions, owner, and next steps so another colleague can follow the work."
          ],
          "practice": [
            {
              "title": "Clarify a recommendation",
              "action": "Rewrite a current recommendation around the decision needed, the supporting facts, and the tradeoffs. Ask a stakeholder outside your specialty to explain it back to you.",
              "evidence": "A revised summary and feedback showing which terms, assumptions, or implications needed clarification."
            },
            {
              "title": "Plan useful project updates",
              "action": "List the people affected by a project and agree on the content and timing of updates. Include a way for them to raise questions and changes.",
              "evidence": "An update plan, a sample message, and a stakeholder response that informed subsequent work."
            },
            {
              "title": "Test the written record",
              "action": "Ask a colleague to use a report, job aid, or decision record without a verbal walkthrough. Revise the places where they cannot find or interpret essential information.",
              "evidence": "The revised document and a short record of the gaps the colleague identified."
            }
          ],
          "questions": [
            "Could someone outside my specialty explain the purpose and implications of my recommendation?",
            "Whose input changed my understanding before I finalized the work?",
            "Which stakeholder needed an update or written explanation sooner?"
          ]
        },
        "people_leader": {
          "focus": "Help people and teams understand one another by adapting messages, addressing communication barriers, inviting candor, and checking understanding.",
          "good": "The team receives practical direction, partner groups can resolve unclear handoffs, and people can raise different views. The leader listens and confirms what each person understood.",
          "great": "Make candid dialogue a regular part of work across groups. Address recurring communication barriers promptly and use feedback to improve how decisions and changes are explained.",
          "watch": [
            "Sending the same level of detail to every audience without checking what each group needs.",
            "Allowing strained exchanges or unclear handoffs between groups to continue.",
            "Inviting questions while reacting defensively or assuming silence means understanding."
          ],
          "examples": [
            "For a schedule change, give the team the implementation detail, give a partner group the effect on its work, and give your manager the decision or support needed.",
            "Bring two groups together to clarify a recurring handoff problem and agree on who will share which information, through what channel, and when.",
            "Before settling a team plan, invite concerns from the people affected, acknowledge differing views, and explain how their input influenced the decision.",
            "In a coaching conversation, summarize the employee's perspective and ask a follow-up question; when explaining a change, ask how they would apply it in their work."
          ],
          "practice": [
            {
              "title": "Explain one change to different audiences",
              "action": "Plan the core message for a current team change, then tailor the detail for employees, a partner group, and your manager. Gather questions and follow up on unanswered points.",
              "evidence": "The audience-specific messages and a record of questions, responses, and resulting adjustments."
            },
            {
              "title": "Repair a communication barrier",
              "action": "Choose a recurring exchange that causes confusion between teams. Facilitate a discussion of each group's needs and agree on a practical communication change.",
              "evidence": "The agreed handoff or communication change and feedback from both groups after trying it."
            },
            {
              "title": "Make room for candid input",
              "action": "Use an upcoming discussion to ask for concerns before stating your preferred answer. Summarize what you heard, invite corrections, and explain the decision afterward.",
              "evidence": "An example of input that was considered and participant feedback on whether their view was understood."
            }
          ],
          "questions": [
            "Which audience needed a different explanation than the one I provided?",
            "What communication barrier did I help people resolve rather than work around?",
            "How did I verify understanding and respond to a view that challenged my own?"
          ]
        },
        "senior_leader": {
          "focus": "Create constructive dialogue, explain major initiatives candidly, reach audiences across levels, and improve the flow of information throughout the organization.",
          "good": "People have regular opportunities to ask questions and offer input. Major initiatives are explained clearly, messages suit different audiences, and information can move upward, downward, and across groups.",
          "great": "Sustain several useful ways for people to engage, address difficult questions directly, and act on recurring information gaps. Reinforce a consistent direction while making its implications meaningful to different audiences.",
          "watch": [
            "Holding forums without responding to the questions and concerns raised.",
            "Giving vague or delayed explanations of major initiatives and leaving uncertainty unaddressed.",
            "Relying on one audience or channel while information stalls between levels or functions."
          ],
          "examples": [
            "Create recurring listening sessions that reach employees in different locations or work patterns, and report back on the issues raised and follow-up actions.",
            "When introducing a major initiative, explain the purpose, expected impact, known constraints, and unresolved questions, including when more information will be available.",
            "Explain the same organizational decision to a frontline group and a senior leadership group using relevant examples and detail while preserving the core facts.",
            "Identify where an important message stops moving between functions or levels, then establish a route for updates to reach affected employees and for their questions to return."
          ],
          "practice": [
            {
              "title": "Create dialogue with follow-through",
              "action": "Host a forum for an audience whose perspective you hear less often. Gather questions in more than one way and assign follow-up to the issues that need an answer.",
              "evidence": "A summary of the themes heard, the responses or actions taken, and participant feedback on the forum's usefulness."
            },
            {
              "title": "Communicate a major initiative",
              "action": "With the appropriate initiative and communications partners, prepare a clear explanation for different audiences. Address what is known, what remains uncertain, and how questions will be handled.",
              "evidence": "The audience-specific messages, a question-and-response record, and changes made after feedback."
            },
            {
              "title": "Remove an information bottleneck",
              "action": "Trace one important decision from its source to the people affected and trace their feedback back to decision-makers. Improve the point where information is delayed or lost.",
              "evidence": "A documented communication gap, the change made, and confirmation from affected groups that the information reached them."
            }
          ],
          "questions": [
            "Which employee perspectives are missing from the dialogue I currently hear?",
            "What important uncertainty have I acknowledged clearly, and when will I provide an update?",
            "Where does information stop moving across levels or functions, and what can I change?"
          ]
        }
      },
      "tips": [
        {
          "title": "Prepare the main point",
          "body": "Before writing or speaking, identify the audience, purpose, and action needed. Organize the supporting facts around that purpose and check their accuracy."
        },
        {
          "title": "Make listening visible through your response",
          "body": "Set aside competing tasks where practical, let the person finish, and summarize the substance of what you heard. Use their correction to refine your understanding."
        },
        {
          "title": "Choose useful detail",
          "body": "Explain unfamiliar terms and make the main message easy to find. Offer supporting detail when it helps the recipient decide or act, and ask whether the explanation meets their need."
        },
        {
          "title": "Edit for the reader",
          "body": "Draft the message, then review it for missing context, unnecessary wording, and an unclear next step. For important documents, ask someone from the intended audience to test its clarity."
        },
        {
          "title": "Change the channel when needed",
          "body": "If a written exchange is becoming confusing or tense, agree on a suitable way to talk it through. Listen to the concern, clarify the facts, and record the agreed next steps afterward."
        },
        {
          "title": "Follow through on questions",
          "body": "Acknowledge questions you cannot answer immediately, identify who can help, and say when you will return with an update. Close the loop so people know what happened to their input."
        }
      ],
      "learningTopics": [
        "Clear business writing and audience-specific presentations",
        "Active listening, clarifying questions, and difficult conversations",
        "Communication planning for team changes and organizational initiatives"
      ],
      "reflections": [
        "Which recent message led to the understanding or action I intended, and what evidence tells me that?",
        "Where did a question or different perspective reveal a gap in my communication?",
        "What single communication habit will I practice next, who will give feedback, and what evidence will show progress?"
      ]
    },
    {
      "id": "customer-focus",
      "why": [
        "Customers experience the whole request, even when the work moves through several teams. A helpful conversation can still end in frustration if the next person lacks context, the expected date changes without notice, or the solution does not address the original need. Customer Focus means understanding what the person is trying to accomplish and carrying that understanding through the work.",
        "At Southwest Gas, the customer may be a person seeking service or an employee, leader, or workgroup relying on another team. Their needs can include clear information, a workable handoff, predictable timing, and confidence that someone owns the next step. Strong customer relationships grow when employees listen carefully, make realistic commitments, and learn from the customer's actual experience."
      ],
      "essentials": [
        {
          "title": "Understand the outcome behind the request",
          "text": "Ask what the customer needs to accomplish, what prompted the request, and what matters most about the result. A request for a report may really be a need to make a staffing decision; a request for another appointment may reflect a scheduling constraint. Confirm the need before choosing a response."
        },
        {
          "title": "Make the next step clear",
          "text": "Explain what you can do, what needs another person's involvement, and when the customer should expect an update. Use language the recipient understands. When handing work to another team, include enough context for that team to continue without making the customer repeat the entire story."
        },
        {
          "title": "Check whether the solution worked",
          "text": "Completion in a work queue is one piece of evidence. Ask whether the customer received the information, can use the result, and still needs anything related to the request. Notice repeated contacts and reopened issues; they can reveal a gap that a completed status does not show."
        },
        {
          "title": "Use feedback to improve the experience",
          "text": "Look for patterns across requests, including feedback from people who are less likely to complain. Separate a one-time preference from a recurring service obstacle. Use the pattern to recommend a practical improvement, test it with the people affected, and check whether their experience improves."
        }
      ],
      "growth": "Growth begins with dependable service on individual requests and expands into improving the conditions that shape service. An employee learns to ask better questions and follow through; an owner anticipates needs and removes recurring friction; a people leader strengthens the team's capability and handoffs; a senior leader aligns resources, partnerships, and decisions around the customer experience. At every stage, progress should be visible in the customer's experience, not only in the amount of activity completed.",
      "related": [
        "communicates-effectively",
        "action-oriented",
        "collaborates",
        "instills-trust"
      ],
      "roles": {
        "non_exempt": {
          "focus": "Understand the specific need, organize assigned work around the customer's request and applicable priorities, and deliver a clear, dependable response within your role.",
          "good": "You ask enough questions to avoid assumptions, explain the next step accurately, and complete the agreed work. When a request needs a different owner or priority decision, you provide useful context and confirm the handoff.",
          "great": "You notice details that could prevent another contact, such as a preferred update method or an unclear requirement, and address them early. You also bring recurring customer difficulties to your leader with specific examples and a practical suggestion.",
          "watch": [
            "Moving straight to the familiar answer before understanding why this customer is asking.",
            "Treating the most persistent request as the highest priority without considering established priorities and other commitments.",
            "Marking work complete without confirming that the requested information or service outcome was delivered."
          ],
          "examples": [
            "A customer asks for a phone update instead of an email. You ask which part of the update is difficult to use and learn that they need to clarify the information during a work break. You agree on a practical contact approach within the available options.",
            "An employee asks for help finding a form. Before sending a link, you ask what they are trying to submit, which step they reached, and when they need it. You identify the correct resource and confirm that it addresses the actual request.",
            "Several internal requests arrive before a reporting deadline. You identify the dates and customer impact, organize the assigned work within established priorities, and ask your leader to resolve a conflict rather than silently delaying one customer's request.",
            "After preparing requested account information or a work packet, you check that it includes the agreed details and reaches the intended recipient through the appropriate channel. You confirm the next step so the customer knows what has been completed and what remains open."
          ],
          "practice": [
            {
              "title": "Practice a three-question opening",
              "action": "For five routine requests, ask what the customer is trying to accomplish, what they have already tried, and when they need a response. Summarize the need back before acting, adapting the wording to the situation.",
              "evidence": "Bring two examples to a check-in where the questions changed your understanding or prevented an unnecessary handoff."
            },
            {
              "title": "Make priority choices visible",
              "action": "Review a small set of open requests with your leader. Compare the customer's need, promised timing, current status, and any dependency. Agree on the order of work and the updates each customer needs.",
              "evidence": "Show a short, appropriately maintained work list with clear next steps and examples of customers receiving updates before they had to ask."
            },
            {
              "title": "Close the request with confirmation",
              "action": "Choose three completed requests and check whether the recipient could use the response. Ask one specific question about the outcome rather than only asking whether everything is fine.",
              "evidence": "Record the service lesson without unnecessary personal details and identify one small change you will use on the next similar request."
            }
          ],
          "questions": [
            "Which question helped you understand the customer's need more accurately than the original request did?",
            "When requests competed, how did you decide what to do first and who needed an update?",
            "What evidence tells you the customer received a usable result?"
          ]
        },
        "exempt": {
          "focus": "Own the customer experience across a piece of work: improve the service, confirm resolution, anticipate upcoming needs, and turn feedback into practical ideas.",
          "good": "You understand how customers use your work, follow up on problems through resolution, and prepare for needs that reasonably follow from their plans. You use feedback to improve both the output and the way customers receive it.",
          "great": "You connect feedback, repeat questions, and upcoming changes to uncover needs customers have not fully articulated. You test a useful improvement with them, demonstrate its effect, and make the improvement repeatable without creating unrealistic service promises.",
          "watch": [
            "Measuring success only by delivery dates while customers still struggle to use the result.",
            "Assuming a sophisticated new feature is valuable without checking the customer's actual work.",
            "Gathering feedback repeatedly but leaving customers unsure what changed as a result."
          ],
          "examples": [
            "An analyst notices that field supervisors repeatedly ask how to interpret the same report. The analyst interviews several users, simplifies the definitions and layout, and tests whether supervisors can answer their common questions without a separate explanation.",
            "After an HR process issue is corrected, the specialist checks with the affected leader after their next use of the process. The specialist confirms the obstacle is resolved, checks for a remaining handoff problem, and keeps ownership until the customer knows who will address it.",
            "Before a department begins its annual planning work, a business partner reviews the upcoming decisions with its leader and prepares the likely data and discussion points. The partner validates the assumptions early so the support arrives when the decisions are being made.",
            "Feedback from employees in several locations shows that a resource is difficult to use away from a desk. The resource owner proposes a shorter, easier-to-navigate version, tests it with those employees, and uses their reactions to refine the next release."
          ],
          "practice": [
            {
              "title": "Trace one request from the customer's side",
              "action": "Choose a recurring service you own and walk through it with two customers who use it differently. Identify where they wait, repeat information, or struggle to understand the response. Select one improvement you can test within your authority.",
              "evidence": "Compare customer observations before and after the change, including whether it reduced confusion or repeat contacts."
            },
            {
              "title": "Plan for the next customer decision",
              "action": "Ask a customer about an upcoming decision or milestone. Identify the information or support they are likely to need, confirm the timing, and prepare a useful first version before the request becomes urgent.",
              "evidence": "Show how the early preparation supported the customer's decision and what you changed after checking your assumptions."
            },
            {
              "title": "Turn feedback into a small experiment",
              "action": "Combine recent feedback into one clearly stated customer problem. Develop two possible responses, choose a manageable test with the affected users, and agree on what a better experience would look like.",
              "evidence": "Document the customer problem, the tested change, user feedback, and the decision to keep, revise, or stop the idea."
            }
          ],
          "questions": [
            "What part of the customer's experience do you own beyond sending the deliverable?",
            "Which upcoming need have you anticipated, and how did you verify that assumption?",
            "What feedback led you to change your original solution?"
          ]
        },
        "people_leader": {
          "focus": "Equip the workgroup to meet changing customer needs, hear the team's customers directly, and make service ownership and cross-team handoffs dependable.",
          "good": "You identify capability or capacity gaps, gather useful customer input, and make expectations for follow-through clear. You help the team coordinate its work with the customer's timing and process rather than managing only its internal queue.",
          "great": "You detect a changing need before it becomes a recurring complaint, develop the team's response, and make customer feedback part of routine operating decisions. Team members can explain their service commitments and resolve handoff friction with the right partners.",
          "watch": [
            "Expecting better service without addressing the training, coverage, or coordination gap behind repeated problems.",
            "Relying only on the most vocal customer or on your team's interpretation of what customers think.",
            "Rewarding quick closure while unresolved needs are transferred between teams."
          ],
          "examples": [
            "A leader learns that employees on different shifts increasingly need support outside the team's usual contact window. The leader assesses the pattern, identifies knowledge and coverage gaps, and works with the appropriate partners on a sustainable response.",
            "A team leader invites several internal customers to describe a recent request from start to finish. The leader combines their feedback with repeat-contact themes and shares the findings with the team, including what customers value and what needs attention.",
            "When a request passes between two team members without resolution, the leader clarifies the accountable owner, agreed outcome, and next update. At the next check-in, the leader reviews whether the customer received the outcome and coaches the follow-through gap.",
            "A support team's information requests repeatedly arrive after a field group's planning cutoff. The leader meets with that group to understand its planning rhythm, adjusts the team's request timing and handoff information, and checks whether the coordination improves."
          ],
          "practice": [
            {
              "title": "Review a developing service need",
              "action": "Ask the team and two customer groups what has changed in the requests they are receiving. Select one emerging need, compare it with the team's current capability and coverage, and choose a practical development or coordination action.",
              "evidence": "Show the gap you identified, the action taken, and a customer example that indicates whether the team is better prepared."
            },
            {
              "title": "Coach ownership through resolution",
              "action": "Use one real handoff in a team discussion. Clarify the outcome, owner, dependency, and customer update. Ask team members to identify how they will know the request is resolved and when they should seek help.",
              "evidence": "Review the request later for a clear owner, timely updates, and confirmation of resolution rather than relying only on a closed status."
            },
            {
              "title": "Align one shared work rhythm",
              "action": "Meet with a customer workgroup to compare its planning or decision cycle with your team's delivery cycle. Agree on one change to timing, intake information, or escalation contact, then review it after several uses.",
              "evidence": "Use customer feedback and examples of avoided rework or last-minute requests to assess whether the change helped both teams."
            }
          ],
          "questions": [
            "What emerging customer need is our current team setup least prepared to meet?",
            "Whose customer perspective is missing from the feedback we normally receive?",
            "Which handoff should we change so the customer experiences one coordinated response?"
          ]
        },
        "senior_leader": {
          "focus": "Make customer needs consequential in organizational choices, align resources with those needs, and build relationships that strengthen the organization's ability to serve over time.",
          "good": "You connect priorities to customer outcomes, sponsor support where service gaps matter, and maintain productive relationships with key customers. Leaders see customer evidence considered in decisions and understand who is responsible for the response.",
          "great": "You create sustained attention to the customer experience across functions, resolve structural barriers that individual teams cannot remove, and cultivate partnerships that improve shared planning. Customers and employees can point to decisions that changed because their experience was understood.",
          "watch": [
            "Calling customer service a priority while resource decisions repeatedly leave known service barriers unaddressed.",
            "Focusing on visible complaints while overlooking customer groups with less access to leadership.",
            "Building a strong personal relationship with a customer without creating continuity across the organization."
          ],
          "examples": [
            "During a leadership review, a senior leader connects a recurring customer difficulty to the organization's priorities, names the decisions needed, and expects follow-up from the responsible leaders. The discussion gives the issue urgency and a clear route to resolution.",
            "When several functions identify the same service obstacle, a senior leader reviews the customer impact alongside competing demands and sponsors the staffing, tools, or coordination support needed for a workable response through the appropriate decision process.",
            "A senior leader establishes an ongoing planning dialogue with a key customer organization or community partner. The relationship brings the right people together to understand future needs, clarify expectations, and maintain continuity when individual contacts change.",
            "A senior leader regularly invites customer-facing employees to explain where the organization makes service difficult. The leader recognizes well-supported improvements, asks how decisions will affect customers, and follows through on barriers that require several functions to act."
          ],
          "practice": [
            {
              "title": "Bring customer evidence into a priority decision",
              "action": "Choose a resource or process decision already on the leadership agenda. Ask for direct customer evidence, identify the groups affected, and make the customer consequences part of the decision criteria and follow-up.",
              "evidence": "Show how the evidence influenced the decision, what outcome the organization will monitor, and which leader owns the response."
            },
            {
              "title": "Strengthen a strategic customer relationship",
              "action": "Review an important customer or partner relationship with the accountable leaders. Identify what each side needs to understand about the other's plans, where coordination breaks down, and how the relationship will continue beyond individual contacts.",
              "evidence": "Agree on a shared agenda, organizational contacts, and a follow-up that produces a concrete planning or service improvement."
            },
            {
              "title": "Remove one barrier across functions",
              "action": "Invite the leaders involved in a recurring customer issue to map its organizational causes. Choose one barrier that exceeds a single team's authority, decide what support or tradeoff is needed, and review implementation with those closest to the customer.",
              "evidence": "Track whether the barrier was removed and whether the customer's experience improved, including any burden shifted to another group."
            }
          ],
          "questions": [
            "Which recent organizational decision visibly changed because we understood the customer impact?",
            "What service barrier persists because it crosses leadership or budget boundaries?",
            "Which key customer relationship needs deeper organizational continuity rather than more executive contact?"
          ]
        }
      },
      "tips": [
        {
          "title": "Ask what a useful result would look like",
          "body": "Before proposing a solution, invite the customer to describe the outcome in their own words. Ask what they need to do next and what has made that difficult. Summarize the need back, including timing and constraints. This keeps the work connected to the customer's purpose and helps uncover when the original request is only part of the problem."
        },
        {
          "title": "Own the connection between teams",
          "body": "When another team must act, make the transition useful. Share the request, relevant context, agreed expectations, and what is still unresolved through the appropriate channel. Tell the customer what happens next and who is handling it. Follow up when needed so a handoff does not become a gap in ownership."
        },
        {
          "title": "Balance responsiveness with realistic commitments",
          "body": "A prompt acknowledgment builds confidence when it includes an honest next step. Check the work and dependencies before promising a result or date. If priorities conflict or timing changes, communicate early and involve the person who can resolve the conflict. Customers can plan more effectively around a clear limitation than an unsupported promise."
        },
        {
          "title": "Look beyond the average experience",
          "body": "Ask which customers find the process hardest to use and why. Differences in work schedules, access to information, familiarity, or communication preferences can reveal an obstacle hidden by a generally positive result. Test an improvement with the affected group and confirm that it helps without creating new confusion for others."
        }
      ],
      "learningTopics": [
        "Discovery questions and listening for the customer's intended outcome",
        "Mapping customer requests, handoffs, and points of repeated effort",
        "Using customer feedback to test and improve a service"
      ],
      "reflections": [
        "Think of a request you handled recently. What did the customer need to accomplish, and how do you know the response helped?",
        "Where does your work create avoidable effort for a customer or another team? Choose one change you can test or raise with the right owner.",
        "Whose experience might be missing from your view of service quality, and how will you hear it directly?"
      ]
    },
    {
      "id": "instills-trust",
      "why": [
        "People coordinate their work around what others say they will do. When commitments are dependable and information is candid, colleagues can make decisions without repeatedly checking whether the facts or the follow-through will change. Trust develops through a pattern of observable choices, including what happens when a deadline is at risk, a mistake is discovered, or a decision is unpopular.",
        "In field and office work at Southwest Gas, trust supports reliable handoffs, honest reporting, and fair treatment. It requires both candor and judgment: share what others need to act, acknowledge what you do not know, and protect information that should not be broadly shared. A strong reputation comes from consistent conduct across situations, not from always having a comfortable answer."
      ],
      "essentials": [
        {
          "title": "Make your commitments specific",
          "text": "Agree on the outcome, owner, and timing before saying yes. Consider existing work and dependencies. Track what you have promised and tell the affected person early if the commitment is at risk, with a realistic next step. Renegotiating openly is more dependable than letting a promise quietly expire."
        },
        {
          "title": "Give a truthful account of the work",
          "text": "Distinguish completed work from work in progress and confirmed information from assumptions. Raise errors and concerns clearly enough for others to respond. Acknowledge your own contribution to a problem and focus on correction instead of minimizing the impact or shifting attention to someone else."
        },
        {
          "title": "Apply the same standards to yourself",
          "text": "Notice whether your actions match the expectations you state to others. Follow the practices that apply to your role, explain legitimate changes in direction, and avoid exceptions based on convenience or personal relationships. Consistency is especially visible when you are busy or under pressure."
        },
        {
          "title": "Represent people and information fairly",
          "text": "Describe others' positions accurately, give credit for contributions, and avoid filling gaps with assumptions. Use the appropriate channels for sensitive matters and be clear about what you can share. Fair representation includes the interests of people who are not in the room and those whose views differ from yours."
        }
      ],
      "growth": "Development moves from personal dependability to creating conditions in which others can rely on the whole team or organization. Individual contributors build a record of honest communication and fulfilled commitments. People leaders make fairness, candor, and follow-through part of team practice. Senior leaders demonstrate that stated values hold when resources, reputation, or personal interests are involved. At each stage, stronger trust is reflected in specific actions that others can verify.",
      "related": [
        "ensures-accountability",
        "communicates-effectively",
        "collaborates",
        "customer-focus"
      ],
      "roles": {
        "non_exempt": {
          "focus": "Build confidence through everyday conduct: follow the practices that apply to your work, speak honestly, and do what you have agreed to do.",
          "good": "You follow established requirements, give accurate status updates, and keep routine commitments. When you are uncertain, make an error, or cannot meet an agreement, you say so promptly and seek the right help.",
          "great": "Others can rely on your conduct during busy periods and awkward situations as well as routine work. You notice a possible gap in your commitment early, communicate it without excuses, and help ensure the next person receives an accurate handoff.",
          "watch": [
            "Taking a familiar shortcut without confirming that it fits the current requirements for the work.",
            "Using a reassuring status such as nearly done when a material task or dependency remains unresolved.",
            "Agreeing to help without checking whether you can deliver alongside existing commitments."
          ],
          "examples": [
            "A colleague asks you to share employee or customer information for a convenient shortcut. You check the applicable access and handling requirements, use the appropriate channel, and ask the responsible person for guidance when the request is unclear.",
            "You tell the next shift that you will update an open item's notes before leaving. You make the update as promised and ensure it reflects the actual status, so the next person receives the same account of the work that you gave verbally.",
            "You discover that you entered the wrong date in an administrative record. You tell the person responsible for the correction what happened, identify the affected item, and explain what is confirmed without hiding the mistake or guessing about its impact.",
            "You agree to prepare a meeting packet by a specific time. You track the remaining inputs, follow up before the deadline, and deliver the completed packet or notify the organizer early enough to agree on a workable alternative."
          ],
          "practice": [
            {
              "title": "Keep a short commitment record",
              "action": "For two weeks, note your routine work promises in the appropriate work system or personal task method: outcome, recipient, and timing. Review the list before accepting additional work and before the end of your workday.",
              "evidence": "Discuss one commitment you completed as agreed and one risk you communicated early, including how the other person could plan as a result."
            },
            {
              "title": "Practice an accurate status update",
              "action": "Choose a task with a dependency and prepare a brief update stating what is complete, what remains, what help is needed, and the next update time. Ask a colleague whether the message gives a clear picture of the work.",
              "evidence": "Compare the update with the actual task status and identify any wording you changed to remove ambiguity or overstatement."
            },
            {
              "title": "Respond openly to a small mistake",
              "action": "When an ordinary work error occurs, promptly explain the known facts to the appropriate person, acknowledge your part, and agree on the correction. Afterward, identify one change that would reduce the chance of repeating it.",
              "evidence": "Describe the timely disclosure, correction, and lesson in a check-in without retaining unnecessary sensitive details."
            }
          ],
          "questions": [
            "What do colleagues currently rely on you to do without needing a reminder?",
            "When you last faced a missed commitment or mistake, how quickly did the affected person learn about it?",
            "Where might your words give a more positive picture than the actual status of the work?"
          ]
        },
        "exempt": {
          "focus": "Be a credible owner of work by giving candid advice, honoring agreements across competing demands, and maintaining professional integrity when the answer is inconvenient.",
          "good": "You communicate limitations and concerns directly, manage commitments deliberately, and make decisions that match your stated standards. Your analyses and recommendations distinguish evidence from judgment and respect the professional responsibilities of your role.",
          "great": "Stakeholders trust you to surface an uncomfortable fact before it becomes a surprise and to manage tradeoffs openly. You preserve the quality and integrity of the work under pressure while helping partners understand what can realistically be delivered.",
          "watch": [
            "Presenting a preliminary interpretation as a confirmed conclusion to make a recommendation sound stronger.",
            "Accepting conflicting deadlines from different partners without making the conflict visible.",
            "Advocating a standard for others while overlooking a convenient exception in your own work."
          ],
          "examples": [
            "An analyst finds that a reporting change limits comparison with earlier results. Before the findings are used in a leadership discussion, the analyst explains the limitation clearly and revises the recommendation so it reflects what the evidence can support.",
            "Two project partners request deliverables for the same date. The project owner reviews the existing agreements, identifies what can be completed, and discusses the conflict with both partners early so any revised commitment is explicit and dependable.",
            "A specialist asks project partners to record decisions and changes in the shared project record. The specialist follows that same practice for their own decisions, including a change that creates additional work, and explains the reason openly.",
            "While preparing an analysis involving employee or customer information, a professional uses the access and review practices that apply to the work, discloses a relevant conflict of interest to the appropriate person, and declines to omit a material finding to make the outcome look better."
          ],
          "practice": [
            {
              "title": "Separate facts, assumptions, and advice",
              "action": "Review an upcoming recommendation and clearly identify the confirmed evidence, assumptions, limitations, and judgment. Ask a knowledgeable colleague to challenge whether the conclusion is supported before the decision meeting.",
              "evidence": "Show how that review improved the accuracy of the recommendation or made an uncertainty visible to the decision maker."
            },
            {
              "title": "Review competing commitments with partners",
              "action": "Map the next month's important deliverables and dependencies. Identify an emerging conflict, discuss realistic options with the affected partners, and confirm any revised agreement before a deadline is missed.",
              "evidence": "Use the agreed outcomes and follow-up to show that partners had accurate expectations and received what was promised."
            },
            {
              "title": "Test consistency under pressure",
              "action": "Choose a standard you regularly ask others to follow, such as documenting changes or checking a source. Review how you applied it during a recent rushed task and identify where convenience influenced your choice.",
              "evidence": "Describe one adjustment to your own work practice and ask a project partner whether the improvement is visible."
            }
          ],
          "questions": [
            "What uncomfortable information does a stakeholder need from you before making the next decision?",
            "Which commitment is most vulnerable to competing priorities, and who needs to know now?",
            "What evidence shows that your own work meets the standards you recommend to others?"
          ]
        },
        "people_leader": {
          "focus": "Create a team reputation for consistent conduct, honest communication, fair representation, and commitments that people can rely on.",
          "good": "You follow the expectations you set, check that team promises are realistic, and respond constructively when someone raises a concern. You represent employees' interests accurately while being clear about decisions, constraints, and what you can commit to.",
          "great": "Team members bring difficult information forward because they expect a fair hearing and a practical response. Other groups trust the team's commitments, and employees see that you explain decisions consistently and speak fairly for people who are absent or less influential.",
          "watch": [
            "Saying that early escalation is welcome but responding with blame or irritation when someone uses it.",
            "Making commitments on behalf of the team without checking its capacity and dependencies.",
            "Representing only the most visible employee's perspective or promising an outcome you do not control."
          ],
          "examples": [
            "A leader asks employees to raise workload concerns before deadlines are at risk. When the leader's own commitment becomes unrealistic, they acknowledge it early, explain the tradeoff, and reset expectations through the same practice they ask the team to use.",
            "Before agreeing that the team will deliver a revised resource to several locations, a leader checks the work and dependencies with the responsible employees. The leader tracks the team's commitments, removes a blocker, and updates partners promptly when a dependency changes.",
            "An employee reports that a draft sent to a partner contains an error. The leader thanks the employee for raising it, discusses the correction without disguising the impact, and uses the experience to reinforce that accurate reporting is expected even when the news is uncomfortable.",
            "In a meeting about a schedule or process change, a leader explains the impact on employees who are not present, distinguishes their concerns from personal opinion, and makes sure those concerns are considered alongside the needs of other teams."
          ],
          "practice": [
            {
              "title": "Compare your message with your response",
              "action": "Ask a trusted colleague or team member for one example of when your response matched a stated expectation and one time it did not. Listen without defending the intent, choose a concrete adjustment, and report back on what you changed.",
              "evidence": "Look for a specific, observable change in your next similar interaction and invite the person to tell you whether it helped."
            },
            {
              "title": "Review team promises before they slip",
              "action": "Hold a brief review of important team commitments to other groups. Confirm the owner, realistic timing, dependencies, and next update. Address one capacity or coordination issue before it becomes a broken promise.",
              "evidence": "Show whether the recipient received the agreed outcome or an early, transparent revision rather than a last-minute surprise."
            },
            {
              "title": "Represent an absent group fairly",
              "action": "Before a decision affecting people outside the discussion, gather their relevant concerns through an appropriate channel. Present the concerns accurately, explain any limits on what can be shared, and close the loop on the outcome.",
              "evidence": "Ask the represented group whether their perspective was understood, and identify how it influenced the decision or follow-up."
            }
          ],
          "questions": [
            "How does your response to bad news influence whether the team will raise the next concern?",
            "What promise have you made for the team that needs a capacity or dependency check?",
            "Whose interests do you need to represent more accurately in the next decision discussion?"
          ]
        },
        "senior_leader": {
          "focus": "Build organizational confidence by making principled choices, honoring commitments, aligning leadership actions with stated values, and communicating truthfully through uncertainty.",
          "good": "You evaluate decisions beyond personal or functional advantage, make leadership commitments visible, and explain material changes honestly. Your conduct gives other leaders a consistent standard for fairness, dependability, and responsible transparency.",
          "great": "People see that organizational interests and stated values hold even when the choice carries a personal cost or creates an uncomfortable conversation. Leaders across functions bring accurate information forward and can explain the commitments, tradeoffs, and follow-through behind major decisions.",
          "watch": [
            "Defending a preferred initiative after the evidence shows that another use of resources better serves the organization.",
            "Making broad leadership promises without accountable ownership or a realistic path to delivery.",
            "Allowing silence or polished language to obscure material uncertainty, changed commitments, or mistakes."
          ],
          "examples": [
            "A senior leader's preferred initiative competes with a more urgent organizational need. The leader openly evaluates the tradeoff, supports the option with the stronger overall case, and explains the decision without protecting personal visibility or the function's status.",
            "After committing leadership support to a cross-functional improvement, a senior leader names the accountable owners, checks that the promised resources and decisions arrive, and addresses a missed commitment directly rather than allowing other teams to absorb the uncertainty.",
            "A senior leader emphasizes consistent decision criteria across locations. When a request involves a familiar or influential stakeholder, the leader applies the same criteria, documents the rationale through the appropriate process, and explains any legitimate difference in circumstances.",
            "During an organizational change, a senior leader explains what has been decided, what is still uncertain, and when people can expect another update. When new information changes the direction, the leader acknowledges the change and its impact instead of implying that it was always the plan."
          ],
          "practice": [
            {
              "title": "Examine a decision for competing interests",
              "action": "Choose a significant decision in which your function or reputation has a stake. Make the organizational objective and decision criteria explicit, invite a credible challenge, and identify who bears the benefits and burdens of each option.",
              "evidence": "Show how the final rationale addresses the organization's needs and the affected groups, including a tradeoff that was uncomfortable for you or your function."
            },
            {
              "title": "Audit a leadership commitment",
              "action": "Select a promise made in a leadership communication or cross-functional agreement. Trace it to an accountable owner, resources, current status, and evidence of delivery. Address any gap and give the affected people an accurate update.",
              "evidence": "Demonstrate delivery or a candidly revised agreement, with clear responsibility for remaining work."
            },
            {
              "title": "Make uncertainty understandable",
              "action": "For an upcoming change update, separate decisions, open questions, constraints on disclosure, and the next point of communication. Ask a leader close to the affected employees to test whether the message is both accurate and useful.",
              "evidence": "Review the questions that follow the update and whether subsequent communication matches the commitments made."
            }
          ],
          "questions": [
            "Which decision would demonstrate that the organization's interests take precedence over your own preference?",
            "What leadership promise may employees interpret as firmer than the delivery plan supports?",
            "Where would a more candid explanation improve trust without disclosing information you should protect?"
          ]
        }
      },
      "tips": [
        {
          "title": "Make a smaller promise you can keep",
          "body": "Check what you control before offering reassurance. If you cannot promise the final result yet, commit to a useful next action or update you can deliver. Say what depends on another person and when you will check back. Follow through at that time even when there is no new resolution; an accurate update can itself be a kept commitment."
        },
        {
          "title": "Name the issue before defending the intent",
          "body": "When something goes wrong, start with the known facts and the impact on the work. Acknowledge your contribution, explain what needs correction, and invite missing context. Discuss intent only if it helps understanding. People can evaluate your reliability more easily when the explanation is direct and the corrective action is visible."
        },
        {
          "title": "Be clear about what you know and can share",
          "body": "Separate confirmed information from assumptions and unresolved questions. If information is restricted or a decision is pending, say what you can explain and when more may be available. Avoid suggesting certainty to end an uncomfortable conversation. Responsible transparency gives people an honest view while respecting legitimate information boundaries."
        },
        {
          "title": "Repair trust through a visible pattern",
          "body": "A sincere acknowledgment starts the repair; repeated follow-through sustains it. Ask what the other person needs to regain confidence, agree on a realistic next step, and deliver it. Check whether the correction addressed the impact. Avoid demanding immediate trust or treating one completed action as proof that the relationship is fully repaired."
        }
      ],
      "learningTopics": [
        "Making, tracking, and renegotiating work commitments",
        "Candid conversations, accurate status reporting, and admitting mistakes",
        "Fair decision-making and responsible handling of sensitive information"
      ],
      "reflections": [
        "Think of a commitment that others are counting on. What have you promised, what could prevent delivery, and what update do they need now?",
        "When have your actions recently matched or contradicted an expectation you expressed to others? Identify one observable adjustment.",
        "What would the people affected by your next decision need to see or understand in order to view it as fair and credible?"
      ]
    },
    {
      "id": "collaborates",
      "why": [
        "Work often crosses several teams before a customer or employee sees the result. A service appointment, a project estimate, or an employee change can depend on people who have different information and competing demands. Collaboration makes those connections deliberate: people understand the shared outcome, contribute their knowledge early, and know how their work fits together.",
        "For leaders, collaboration includes the conditions they create for others. Employees notice whose ideas receive attention, whether disagreement is welcome, and who receives credit. A leader builds stronger partnerships by addressing these everyday signals and by resolving the practical barriers that make cooperation difficult. The result should be a better decision or smoother handoff, with clear responsibility for the next step."
      ],
      "essentials": [
        {
          "title": "Start with the shared outcome",
          "text": "Describe what the teams need to accomplish together and how each contributes. For a scheduling improvement, discuss the customer experience and workable field commitments together. Use that shared purpose to evaluate competing preferences."
        },
        {
          "title": "Invite useful differences",
          "text": "Include people who understand different parts of the work, especially those who will carry out the decision. Ask what the proposal overlooks and listen before defending it. Explain how the input affected the outcome."
        },
        {
          "title": "Make the partnership workable",
          "text": "Agree on handoff information, decision ownership, response expectations, and a way to resolve disagreements. Review a real example together so both sides can see where assumptions differ. Keep the arrangement simple enough to use."
        },
        {
          "title": "Recognize the actual contributions",
          "text": "Name the team achievement and the specific work that made it possible. Include less visible contributions such as checking data, resolving a dependency, or preparing another group. Accurate credit helps partners understand that their effort matters."
        }
      ],
      "growth": "Choose one working relationship where repeated clarification, delayed decisions, or rework suggests a collaboration gap. Ask the other group what makes your requests difficult to complete and share your own constraints. Agree on one change, try it on a small piece of work, and compare what happened with the starting point. As responsibility grows, look beyond individual relationships to recurring barriers in priorities, decision rights, or information access that require leadership action.",
      "related": [
        "communicates-effectively",
        "instills-trust",
        "ensures-accountability",
        "customer-focus"
      ],
      "roles": {
        "people_leader": {
          "focus": "Create productive teamwork around daily commitments. Help employees and partners contribute openly, understand decisions, and receive fair recognition for the work they do together.",
          "good": "The team shares information and differing views, affected employees contribute before decisions are finalized, and partners understand the handoffs. Recognition reflects both individual effort and shared results. The leader follows up when cooperation breaks down.",
          "great": "The leader makes collaboration easier across repeated situations. Quieter voices influence decisions, partners resolve issues with less prompting, and improvements to handoffs reduce recurring confusion. Credit is specific and balanced even when the work is visible to senior leaders.",
          "watch": [
            "Asking for input after the decision is effectively complete, then treating a lack of enthusiasm as resistance.",
            "Relying on the same outspoken employees while overlooking people who carry out the work or understand exceptions.",
            "Adding meetings without clarifying ownership, or allowing the most visible person to receive credit for everyone’s work."
          ],
          "examples": [
            "After the team improves a recurring service handoff, recognize the shared result and describe who identified the issue, who tested the change, and who checked the records. Include the contribution of the partner team when reporting the improvement to your manager.",
            "Before revising a team’s workload plan, ask each employee what may be difficult to deliver and what the plan misses. Thank someone who raises an inconvenient concern, clarify the facts, and explain what you will change or investigate.",
            "For a project involving an external service provider, bring the internal coordinator and provider contact together to agree on the information needed at each handoff. Review one incomplete request together and improve the handoff instructions within your authority.",
            "When changing how customer follow-up work is assigned, involve employees who handle the cases and partners who receive their updates. Compare the options against the shared goal, make the decision owner clear, and explain how their input influenced the choice."
          ],
          "practice": [
            {
              "title": "Repair one recurring handoff",
              "action": "Choose a handoff that generates repeat questions. Meet with the receiving team, examine three recent examples, and agree on the essential information, owner, and next step. Try the revised handoff for two weeks and review it together.",
              "evidence": "Keep a before-and-after example, count clarification requests, and ask the receiving team what became easier and what still needs attention."
            },
            {
              "title": "Facilitate a decision with wider input",
              "action": "For an upcoming team decision, identify who is affected and whose perspective is usually absent. Share the question in advance, invite each viewpoint, and close with the decision, reasoning, and responsibilities.",
              "evidence": "Record the perspectives considered and one way they changed the decision. Ask two participants whether they had a fair opportunity to contribute."
            },
            {
              "title": "Make contributions visible",
              "action": "At the close of a shared assignment, ask partners which contributions made the outcome possible. Use that information to recognize the team and specific individuals accurately in your normal project update.",
              "evidence": "Check the recognition with the people involved and note any important contribution you would otherwise have missed."
            }
          ],
          "questions": [
            "Whose input could change the next team decision, and when will I invite it?",
            "Which partner finds our handoffs difficult, and what have I done with that feedback?",
            "Does the recognition I give reflect the work people actually contributed?"
          ]
        },
        "senior_leader": {
          "focus": "Make collaboration possible across functions and levels. Bring a broad set of perspectives into important decisions and address organizational conditions that keep teams from working toward shared outcomes.",
          "good": "Leaders seek input beyond their own function, employees can raise concerns honestly, and teams have support for shared work. Significant barriers are surfaced and addressed through clear decisions, ownership, and follow-through.",
          "great": "The leader repeatedly integrates differing perspectives into organizational choices and creates dependable ways for concerns to reach decision makers. Changes to priorities, processes, or decision rights make collaboration sustainable across groups rather than dependent on personal favors.",
          "watch": [
            "Consulting only peers or direct reports and assuming they represent the experience of every affected team.",
            "Inviting candid feedback publicly but responding defensively or failing to explain what happened afterward.",
            "Calling for teamwork while leaving conflicting priorities, unclear authority, or duplicate approvals unresolved."
          ],
          "examples": [
            "Before approving a change to a service process, invite perspectives from operations, customer-facing teams, technology, and employees who manage exceptions. Ask each group what the proposal assumes, then show which tradeoffs and practical concerns shaped the final decision.",
            "During a discussion with employees from several locations, invite concerns about an initiative and respond with curiosity when someone challenges an assumption. Assign follow-up for issues that need investigation and report back on the findings and decisions.",
            "Sponsor a joint effort between functions that share responsibility for a recurring customer problem. Establish a common outcome, make leaders jointly review progress, and recognize improvements that benefit the complete process even when the work crosses reporting lines.",
            "When two functions repeatedly wait for each other’s approval, ask their leaders to map the decision path. Resolve the unclear authority within your remit, remove unnecessary duplication through the appropriate owners, and check whether the revised arrangement works."
          ],
          "practice": [
            {
              "title": "Broaden an important discussion",
              "action": "Choose a decision with effects across functions. Ask for input from affected levels and locations before the recommendation is finalized. Summarize the competing needs and explain the tradeoffs when communicating the decision.",
              "evidence": "Keep a record of the perspectives included, the assumptions corrected, and the resulting changes to the recommendation."
            },
            {
              "title": "Remove a structural obstacle",
              "action": "Ask two partner functions to identify one repeated barrier to shared work. Determine whether it concerns priorities, access, authority, or process. Sponsor a defined change with an owner and a follow-up date.",
              "evidence": "Compare handoff delays or unresolved decisions before and after the change, and ask both groups whether the obstacle was actually reduced."
            },
            {
              "title": "Close the loop on candid input",
              "action": "Use an existing leadership forum to invite views on a difficult issue. Explain how questions will be addressed, follow up with the responsible leaders, and return with what was learned and what action will follow.",
              "evidence": "Track the concerns raised and responses provided. Ask participants whether they would feel able to raise another difficult issue."
            }
          ],
          "questions": [
            "Where do our priorities make it harder for two teams to succeed together?",
            "What did I change after hearing a perspective from outside my usual circle?",
            "Which collaboration problem requires a leadership decision instead of another request to cooperate?"
          ]
        }
      },
      "tips": [
        {
          "title": "Identify the missing perspective",
          "body": "Before a discussion, list who owns the work, who receives it, and who handles exceptions. Compare that list with the people invited. Add the perspective most likely to reveal an overlooked constraint, and ask a specific question that draws on that person’s experience."
        },
        {
          "title": "Make disagreement useful",
          "body": "Ask each person to explain the outcome they are protecting and the evidence behind their concern. Summarize both positions before deciding. Acknowledge reasonable tradeoffs and give a clear explanation when the decision cannot satisfy every preference."
        },
        {
          "title": "Clarify how input becomes a decision",
          "body": "Tell participants what is open for discussion, who will decide, and when the decision is needed. Close the conversation with the choice, next steps, and unresolved questions. This helps people participate meaningfully while keeping shared work moving."
        },
        {
          "title": "Check the other side of the handoff",
          "body": "Ask a partner to walk through what happens after your team sends work. Notice missing context, repeat entry, and unclear ownership. Agree on one practical improvement and ask the receiving team to judge whether it helped."
        }
      ],
      "learningTopics": [
        "Facilitating participation and constructive disagreement",
        "Shared decisions and effective handoffs",
        "Recognizing contributions across teams"
      ],
      "reflections": [
        "When did another person’s perspective last improve my decision?",
        "What does my behavior signal when someone disagrees with me?",
        "Which shared outcome would improve if I strengthened one partnership this month?"
      ]
    },
    {
      "id": "develops-talent",
      "why": [
        "A team’s ability to deliver depends on what its people can do today and what they are learning to do next. Development connects an employee’s interests with the capabilities the work requires. It can happen while preparing an analysis, handling a difficult conversation, learning a process, or leading a small improvement, provided the learning goal and support are clear.",
        "Leaders shape whether development survives the pressure of daily work. They decide who receives a stretch opportunity, when feedback is given, and whether essential knowledge stays with one person. Preparing people for greater responsibility takes repeated practice and evidence of readiness. It also requires attention to employees whose growth may deepen expertise or broaden contribution without a move into management."
      ],
      "essentials": [
        {
          "title": "Connect growth to meaningful work",
          "text": "Discuss the employee’s interests alongside the team’s future needs. Define a skill the employee wants to build and a real assignment where it will matter. Agree on what improved performance would look like."
        },
        {
          "title": "Coach close to the experience",
          "text": "Use a recent observation to describe what worked and what could improve. Ask for the employee’s view, agree on one adjustment, and provide another opportunity to practice. Follow up while the experience is still useful."
        },
        {
          "title": "Match challenge with support",
          "text": "Choose a stretch that adds a manageable new responsibility. Clarify authority, access to help, and review points. Give the employee room to think while keeping the assignment within their qualifications and the work’s requirements."
        },
        {
          "title": "Build readiness with evidence",
          "text": "Identify the knowledge and judgment key roles require. Review demonstrated skills, remaining gaps, and employee interests. Use observed performance and repeated practice to assess readiness, and keep development conversations separate from promises of a future appointment."
        }
      ],
      "growth": "Start with one employee and one specific capability. Ask what they want to strengthen, choose a useful assignment, and agree on the support and evidence of progress. Observe the work, coach promptly, and review what the employee can now do with greater independence. Extend this discipline across the team so learning opportunities reach different employees. At broader leadership levels, examine whether managers have the time, expectations, and practical support to develop people consistently.",
      "related": [
        "self-development",
        "communicates-effectively",
        "ensures-accountability",
        "strategic-mindset"
      ],
      "roles": {
        "people_leader": {
          "focus": "Build the team’s capability through regular coaching, practical learning opportunities, and preparation for key responsibilities. Understand each employee’s interests and help turn them into a realistic development action.",
          "good": "Employees can describe what they are developing and how they will practice. The leader gives specific feedback, provides useful assignments, and understands readiness gaps for key roles. Development is discussed during the work, with follow-up on progress.",
          "great": "Learning becomes a reliable part of team operations. Employees receive well-matched challenges and timely coaching, essential knowledge is shared, and readiness grows through demonstrated performance. The leader adjusts opportunities as interests, capability, and future team needs change.",
          "watch": [
            "Treating completion of a course or exposure to a task as sufficient evidence that someone can perform independently.",
            "Giving stretch assignments repeatedly to the same dependable employee while others receive little opportunity to grow.",
            "Taking over difficult work too quickly or assigning new responsibility without the coaching, time, or support it needs."
          ],
          "examples": [
            "For a key team role that coordinates scheduling or reporting, identify the capabilities a successor would need. Discuss interests with potential successors, arrange supported practice, and review observed performance and remaining readiness gaps with the appropriate subject-matter expert.",
            "During individual conversations, ask employees about skills they want to develop. Connect one interest to an upcoming team need, such as explaining an analysis or improving a handoff, and arrange time for practice and a review of what they learned.",
            "After an employee briefs a partner team, discuss one moment where the explanation was effective and one where the audience needed more context. Ask the employee how they would revise it, then review their approach before the next briefing.",
            "Invite an employee who wants broader coordination experience to lead a small improvement to the team’s request process. Agree on the scope, decision limits, partner contacts, and check-ins, then debrief both the result and the skills practiced."
          ],
          "practice": [
            {
              "title": "Turn an interest into a development assignment",
              "action": "Ask one employee which capability they want to build. Select an upcoming piece of work that provides practice, define the learning goal, and agree on support and review dates before the assignment begins.",
              "evidence": "Compare an early and later work sample, capture feedback from a relevant partner, and ask the employee what they can now do more independently."
            },
            {
              "title": "Practice a short coaching cycle",
              "action": "Observe a recurring task or meeting. Describe a specific behavior and its effect, invite the employee’s assessment, and agree on one change. Observe the next attempt and discuss what improved.",
              "evidence": "Record the behavior practiced, the agreed adjustment, and the change observed during the second attempt."
            },
            {
              "title": "Strengthen readiness for a key responsibility",
              "action": "Identify a responsibility with limited coverage. Describe the capabilities needed, discuss interests with possible learners, and arrange appropriate observation followed by supported practice. Review readiness with the relevant subject-matter expert.",
              "evidence": "Keep a capability checklist showing observed strengths, remaining gaps, and the next practice opportunity; avoid treating attendance alone as readiness."
            }
          ],
          "questions": [
            "What does each employee want to learn, and how recently did I ask?",
            "Who is receiving meaningful practice opportunities, and who is being overlooked?",
            "What evidence shows that a developing employee is ready for greater responsibility?"
          ]
        },
        "senior_leader": {
          "focus": "Make ongoing development a leadership expectation and an organizational capability. Coach key talent personally, support preparation for future leadership needs, and improve access to meaningful growth for employees across the organization.",
          "good": "Leaders discuss development alongside delivery, provide coaching to emerging talent, and support efforts that prepare employees for future needs. The senior leader looks across groups to understand where learning opportunities and readiness gaps exist.",
          "great": "The leader consistently connects learning investments and work assignments to future capability needs, actively mentors talent, and follows through on leadership development efforts. Employees across functions and career paths have practical opportunities to grow, with progress assessed through application.",
          "watch": [
            "Endorsing development in principle while allowing delivery demands to repeatedly cancel the time or support needed for learning.",
            "Focusing attention on a small visible group without examining development access for other employees or specialist career paths.",
            "Sponsoring an initiative at launch but leaving its owners without follow-up, resources, or a clear view of the capability it should build."
          ],
          "examples": [
            "In a leadership review, ask managers to explain one capability their teams are building and where it has improved the work. Discuss what they learned from a difficult assignment and reinforce the value of applying those lessons across teams.",
            "Arrange recurring coaching conversations with an employee preparing for broader leadership responsibility. Review a real decision they are facing, ask them to explain the options and tradeoffs, and revisit the outcome to develop their judgment.",
            "Sponsor a proposed effort to prepare leaders for future responsibilities. Help its owners define the capabilities to develop, secure appropriate participation and support, and review evidence that participants are applying what they practice in their teams.",
            "Ask leaders across functions how employees access development, including people on different schedules and those pursuing technical expertise. Address a practical gap, such as limited time for supported practice, and review whether more employees can participate meaningfully."
          ],
          "practice": [
            {
              "title": "Coach a developing leader through a real decision",
              "action": "Agree on a development goal with an emerging leader. Use three conversations around a live assignment: preparation, progress, and reflection. Ask the person to explain their reasoning before offering your perspective.",
              "evidence": "Capture how the person’s decision process changed, feedback from those affected, and the next situation where they will apply the learning."
            },
            {
              "title": "Review the capability behind a future priority",
              "action": "Choose an upcoming business priority and ask leaders what employees will need to do differently. Identify a capability gap, sponsor a practical development response, and establish a way to review application in the work.",
              "evidence": "Document the capability need, the practice provided, and examples showing whether employees can perform the new responsibility."
            },
            {
              "title": "Examine access to development",
              "action": "Review opportunities across teams, locations, schedules, and career interests with the relevant leaders. Identify one group with limited access and agree on an achievable change to timing, support, or assignment availability.",
              "evidence": "Review who used the improved opportunity, what they practiced, and whether the change helped them apply a new skill."
            }
          ],
          "questions": [
            "Which future capability needs sustained development attention now?",
            "How does my own time and follow-through show that developing people matters?",
            "Who has limited access to growth, and what can I change within my authority?"
          ]
        }
      },
      "tips": [
        {
          "title": "Name the skill before choosing the activity",
          "body": "Describe what the employee should be able to do more effectively. Then choose an assignment or learning topic that gives them a chance to practice it. A precise goal makes it easier to select useful support and judge whether the experience helped."
        },
        {
          "title": "Ask before advising",
          "body": "Begin a coaching conversation by asking what the employee noticed, what they tried, and what they would change. Add an observation they may have missed. Agree on a manageable next step and return to it after another attempt."
        },
        {
          "title": "Set a stretch with clear boundaries",
          "body": "Explain the responsibility the employee will own, decisions they can make, and situations that need guidance. Arrange checkpoints around the difficult parts. Increase independence as capability becomes visible, while keeping support available."
        },
        {
          "title": "Look for application",
          "body": "After a learning experience, ask for an example of how the person used it in real work. Review a work sample or observe a conversation, then ask what still feels difficult. Use the answer to choose the next practice opportunity."
        }
      ],
      "learningTopics": [
        "Coaching through observation, feedback, and practice",
        "Designing useful stretch assignments",
        "Assessing readiness and broadening access to development"
      ],
      "reflections": [
        "Whose growth have I actively supported through a real assignment recently?",
        "When do I give answers that an employee could learn to work out with support?",
        "What evidence would convince me that a development action has improved capability?"
      ]
    },
    {
      "id": "ensures-accountability",
      "why": [
        "A commitment becomes useful when people understand the expected result, who owns it, and how progress will be checked. In work that connects customers, field activity, records, and supporting functions, an unclear responsibility can leave the next person waiting. Accountability makes those responsibilities visible and keeps attention on delivery, quality, and the requirements that apply to the work.",
        "Leaders establish accountability through their response to both progress and problems. They acknowledge their own decisions, examine missed commitments directly, and help the team correct course. Useful monitoring reveals a gap early enough to act. Feedback from people receiving the work adds another check: a task can be marked complete while the intended result still needs attention."
      ],
      "essentials": [
        {
          "title": "Define the commitment",
          "text": "Agree on the result, owner, timing, quality expectations, and relevant requirements before work begins. Ask the owner to explain the commitment in their own words and identify dependencies that could affect delivery."
        },
        {
          "title": "Own the outcome",
          "text": "Be clear about your part in results, including decisions about priorities, resources, and support. When a commitment is missed, establish what happened, address the gap, and follow through on the corrective action."
        },
        {
          "title": "Monitor what matters",
          "text": "Use a small set of milestones and measures that show progress toward the result. Check quality and unresolved issues alongside volume or completion. Investigate changes in the measures before drawing conclusions."
        },
        {
          "title": "Build feedback into delivery",
          "text": "Identify when the people receiving the work can check whether it meets their needs. Gather feedback while changes are still practical, assign follow-up, and confirm whether the adjustment resolved the issue."
        }
      ],
      "growth": "Select one recurring commitment and make the expectations more explicit. Confirm the owner, outcome, due date, dependencies, and evidence of completion. Review progress before the deadline, ask the recipient whether the work meets the need, and address any gap directly. As your responsibilities expand, examine patterns across teams: inconsistent expectations, measures that hide problems, or repeated missed commitments that require a broader leadership decision.",
      "related": [
        "action-oriented",
        "instills-trust",
        "collaborates",
        "develops-talent"
      ],
      "roles": {
        "people_leader": {
          "focus": "Help the team meet clear commitments through ownership, appropriate monitoring, and timely feedback. Apply expectations consistently and take responsibility for the leadership decisions that influence the team’s results.",
          "good": "Employees understand their commitments and applicable requirements, progress is reviewed at useful points, and issues receive timely attention. The leader owns their contribution to outcomes and uses feedback from partners to improve delivery.",
          "great": "The team identifies gaps early, raises risks openly, and follows through on corrective actions with less prompting. Measures and stakeholder feedback guide adjustments throughout the work, and the leader consistently models the responsibility expected of others.",
          "watch": [
            "Assuming ownership is clear because an action was discussed in a meeting, without confirming the owner and expected result.",
            "Explaining missed commitments mainly through other teams’ actions while overlooking your own choices about priorities or support.",
            "Tracking completed tasks or volume without checking quality, applicable requirements, and whether the recipient’s need was met."
          ],
          "examples": [
            "When a team report is late, explain to the receiving leader that your review timing contributed to the delay. Agree on the recovery date, help resolve the immediate issue, and change the review schedule so the same problem is less likely to recur.",
            "For a customer follow-up assignment, confirm the owner, due date, applicable procedures, required records, and expected completion check. If work falls short, discuss the specific gap and agree on corrective action while applying the same expectations to your own commitments.",
            "Review a work queue using due dates, unresolved items, and a suitable quality check. When a pattern suggests that cases are waiting too long for a handoff, investigate the cause and redirect effort before the backlog grows.",
            "When the team produces a recurring report for operations, arrange an early review of a draft with the receiving group. Record what needs clarification, assign the changes, and check that the revised report supports the decisions it is meant to inform."
          ],
          "practice": [
            {
              "title": "Make one commitment explicit",
              "action": "Choose a recurring deliverable and agree with its owner and recipient on the result, timing, quality check, and dependencies. Schedule a progress review early enough to address a delay or misunderstanding.",
              "evidence": "Keep the agreed expectations and completion evidence. Ask both parties whether responsibilities and acceptance criteria were clear."
            },
            {
              "title": "Review a missed commitment constructively",
              "action": "Use a recent missed commitment to examine what was expected, what happened, and what you and the team controlled. Agree on a specific corrective action, its owner, and the date you will verify it.",
              "evidence": "Record the agreed action and check the next comparable assignment for evidence that the underlying problem was addressed."
            },
            {
              "title": "Add a feedback point before completion",
              "action": "Identify a deliverable that often requires rework. Ask the recipient to review a sample or draft at a useful milestone, then make and confirm the necessary adjustments before final delivery.",
              "evidence": "Compare the feedback received before completion with the rework requested afterward, and capture what the team will retain in its process."
            }
          ],
          "questions": [
            "Which commitment could two people on my team interpret differently?",
            "What did I personally do to help or hinder the last result we missed?",
            "What information would reveal a delivery gap early enough for us to act?"
          ]
        },
        "senior_leader": {
          "focus": "Establish consistent accountability across teams and leadership levels. Ensure major commitments have clear ownership, leaders address performance gaps, and management information supports timely decisions about organizational results.",
          "good": "Leaders understand their responsibilities for agreed outcomes, organizational commitments receive regular attention, and performance discussions lead to action. Management reviews provide a useful view of progress, dependencies, and gaps across teams.",
          "great": "Accountability remains clear through competing priorities and changing conditions. Leaders surface problems early, senior decisions remove obstacles, and performance reviews verify that corrective actions work. The organization learns from missed commitments without allowing them to disappear from view.",
          "watch": [
            "Accepting repeated changes to delivery dates without examining the impact, underlying cause, and realistic recovery commitment.",
            "Stepping around a leader to manage the team’s work directly while leaving the leader’s responsibility unclear.",
            "Relying on reassuring summary indicators without checking the definitions, exceptions, or evidence behind them."
          ],
          "examples": [
            "At the start of a cross-functional initiative, confirm each leader’s agreed outcome, dependencies, and review points. When expectations are missed, require a clear explanation and corrective action, and follow through consistently across the participating groups.",
            "Review a major customer-service or business-system commitment with its accountable leaders. When a dependency threatens delivery, make the necessary priority decision, confirm a credible recovery plan, and ensure affected parties receive an accurate update.",
            "When a leader’s team repeatedly misses agreed milestones, discuss the pattern with that leader using specific evidence. Clarify their responsibility, explore support needs, agree on a corrective plan, and review whether the team’s performance improves.",
            "Use an existing management review to compare progress against organizational goals, inspect significant exceptions, and confirm that measures mean the same thing across teams. Assign decisions and follow-up actions, then verify whether those actions changed the result."
          ],
          "practice": [
            {
              "title": "Trace a major commitment",
              "action": "Choose one organizational commitment and trace it through the leaders, teams, dependencies, and measures involved. Resolve unclear ownership and confirm how a material delivery risk will reach the appropriate decision maker.",
              "evidence": "Document the clarified responsibilities and test them against a real issue to see whether it receives a timely decision."
            },
            {
              "title": "Strengthen a leadership performance conversation",
              "action": "Select a recurring gap in a leader’s area. Review the evidence together, distinguish causes within and beyond their control, and agree on their corrective actions and the support you will provide.",
              "evidence": "At the next review, assess the agreed actions and resulting performance; record what still requires a decision or further support."
            },
            {
              "title": "Test the usefulness of a management review",
              "action": "Examine one existing dashboard or review meeting. Check whether its measures reveal progress, quality, and meaningful exceptions. Improve one weak measure or follow-up practice with the responsible owners.",
              "evidence": "Identify a decision the improved review enabled and verify that the resulting action was completed and had the intended effect."
            }
          ],
          "questions": [
            "Which major commitment has an owner but lacks a credible view of progress?",
            "Am I holding each leader responsible for outcomes with comparable clarity and follow-through?",
            "What important exception might our current management information conceal?"
          ]
        }
      },
      "tips": [
        {
          "title": "Confirm what complete means",
          "body": "Ask the owner and recipient to describe a successful result. Resolve differences in scope, quality, timing, and required documentation before work begins. Use that shared understanding when checking completion and discussing changes."
        },
        {
          "title": "Surface risk while choices remain",
          "body": "At progress reviews, ask what could prevent delivery and what decision or support is needed. Agree on an action and its owner. Follow up before the deadline so that raising a concern leads to a practical response."
        },
        {
          "title": "Use evidence in the difficult conversation",
          "body": "Describe the agreed commitment and the observed gap, then ask what happened. Acknowledge your own part where relevant. Agree on the correction, support, and follow-up date, and return to the conversation with evidence of progress."
        },
        {
          "title": "Verify the correction",
          "body": "After an action is reported complete, check whether it resolved the problem. Review the next work sample, milestone, or recipient feedback. If the problem persists, revisit the cause and adjust the action instead of treating closure in a tracker as sufficient."
        }
      ],
      "learningTopics": [
        "Setting clear commitments and acceptance criteria",
        "Performance conversations and corrective follow-through",
        "Using measures, milestones, and stakeholder feedback"
      ],
      "reflections": [
        "Do my own commitments receive the same follow-through I expect from others?",
        "Which recurring performance gap have I discussed without verifying a correction?",
        "How do I know that completed work delivered the intended result?"
      ]
    },
    {
      "id": "strategic-mindset",
      "why": [
        "Strategic thinking connects today's choices with the organization Southwest Gas will need to be in the future. Senior leaders look beyond an immediate request or an annual target to consider customer needs, workforce capability, financial capacity, technology, and the conditions surrounding the business. The aim is a clear set of choices about where to focus effort and what the organization must be able to do well.",
        "A useful strategy can guide decisions when resources are limited and circumstances change. It identifies the strengths the organization can build on, makes important assumptions visible, and connects plans across functions. Leaders demonstrate this competency when they compare alternatives, explain tradeoffs, and revise direction using evidence while keeping the longer-term purpose in view."
      ],
      "essentials": [
        {
          "title": "Look beyond the immediate request",
          "text": "Ask what a decision will enable or constrain over time. Distinguish an urgent operational issue from a recurring pattern that may require a different strategic response."
        },
        {
          "title": "Make choices explicit",
          "text": "Identify what matters most, the alternatives considered, and what will receive less attention. A list of worthwhile activities becomes a strategy only when it helps people choose."
        },
        {
          "title": "Test the assumptions",
          "text": "Separate what is known from what is expected. Consider more than one plausible future and identify evidence that would change the decision."
        },
        {
          "title": "Connect the organization",
          "text": "Check how one function's plan affects the capacity, timing, and commitments of others. Resolve conflicting priorities before they become competing instructions for employees."
        }
      ],
      "growth": "At the senior leader level, the scope moves beyond delivering one team's plan to shaping choices across a function or the enterprise. The challenge is to connect different time horizons and perspectives: what customers need, what employees can deliver, what resources are available, and what future conditions may demand. Broader responsibility calls for more integration and disciplined judgment, rather than simply a larger number of initiatives.",
      "related": [
        "drives-vision-purpose",
        "customer-focus",
        "collaborates",
        "ensures-accountability"
      ],
      "roles": {
        "senior_leader": {
          "focus": "Build a viable longer-term direction, prepare for plausible changes, and align decisions across functions.",
          "good": "A leader explains how the strategy uses the organization's strengths, considers more than one future scenario, and keeps plans current. Other functions can see where their priorities fit and which dependencies need attention.",
          "great": "A leader anticipates shifts early, brings different perspectives into strategic choices, and integrates plans into a direction people can act on. The organization knows which assumptions to monitor and when new evidence should prompt a change.",
          "watch": [
            "Calling an activity list a strategy without explaining the choices, tradeoffs, or intended outcomes.",
            "Using one forecast as if it were certain, or revisiting assumptions only after a major problem occurs.",
            "Approving separate plans that compete for the same people, systems, or timing without resolving the conflict."
          ],
          "examples": [
            "When shaping a longer-term customer-service improvement plan, a senior leader identifies strengths such as employee knowledge and established customer relationships, tests where those strengths create value, and uses the findings to choose priorities. The plan explains why those choices fit Southwest Gas instead of copying another organization's approach.",
            "Before committing to a multi-year workforce initiative, a senior leader considers different demand, hiring, and technology scenarios. The team identifies actions that would help in several scenarios and signs that would indicate a different approach is needed.",
            "During a strategy review, a senior leader compares current customer feedback, resource capacity, and business conditions with the assumptions behind an existing plan. The leader explains which priorities remain, which change, and what that means for teams' work.",
            "When several functions propose improvements that depend on the same system or specialist group, a senior leader brings the owners together to align outcomes, sequence work, and resolve competing demands. Each function's plan shows how it contributes to the shared direction."
          ],
          "practice": [
            {
              "title": "Create a one-page strategic choice",
              "action": "Use a live planning decision. Describe the desired longer-term outcome, the organizational strength it builds on, two alternatives, the main tradeoff, and the assumptions behind the recommendation. Review it with a partner who sees the business from a different function.",
              "evidence": "The recommendation states a clear choice and what will be deferred or stopped. Feedback identifies at least one assumption or dependency that was strengthened before the decision."
            },
            {
              "title": "Test a plan against different futures",
              "action": "Choose an initiative with a longer time horizon. Develop a small set of plausible scenarios with the relevant business partners, then identify which decisions remain useful and which depend on a particular assumption. Agree on signals to review at a future check-in.",
              "evidence": "The team can explain the assumptions behind the plan, the signals it is watching, and who will bring new evidence forward. A later review records whether the direction held or needed to change."
            },
            {
              "title": "Map the connections between plans",
              "action": "Bring together the owners of related initiatives. Map shared outcomes, resource demands, milestones, and dependencies. Resolve one priority conflict or sequencing issue and document the agreed decision.",
              "evidence": "Participating functions use the same priority and dependency map. Their next planning discussion reflects the agreed sequence and identifies changes that could affect one another."
            }
          ],
          "questions": [
            "What future condition are we assuming, and what evidence would cause us to rethink it?",
            "Which organizational strengths support this choice, and where are we relying on a capability we still need to build?",
            "What would another function have to change for this strategy to work?"
          ]
        }
      },
      "tips": [
        {
          "title": "Separate outcomes from initiatives",
          "body": "Start with the change the organization needs to achieve. Then examine whether the proposed initiatives are the best route to it. This makes it easier to revise an activity without losing sight of the purpose."
        },
        {
          "title": "Invite a useful challenge",
          "body": "Ask a knowledgeable colleague to challenge the recommendation before it is finalized. Give them the assumptions and alternatives, and ask where the reasoning is weakest. Treat the discussion as a way to improve the decision rather than defend the first proposal."
        },
        {
          "title": "Keep an assumption record",
          "body": "Alongside a major plan, record the few assumptions most likely to affect the decision. Name the information that would support or weaken each one, who will monitor it, and when the group will revisit it. Keep the record brief enough to use."
        },
        {
          "title": "Explain the change in direction",
          "body": "When a strategy changes, connect the new evidence to the decision. Explain what remains consistent, what will change, and what teams should do next. This helps people distinguish deliberate adaptation from shifting priorities without explanation."
        }
      ],
      "learningTopics": [
        "Scenario planning and testing strategic assumptions",
        "Strategic choices, prioritization, and resource tradeoffs",
        "Cross-functional strategy alignment and execution"
      ],
      "reflections": [
        "Which recent decision would I make differently if I considered its effects two or three years from now?",
        "When did input from another function last change my strategic recommendation?",
        "Which current priority has become less relevant, and what evidence supports revisiting it?"
      ]
    },
    {
      "id": "drives-vision-purpose",
      "why": [
        "People are better able to connect their effort to the larger organization when they understand why the work matters and where it is heading. Senior leaders make that connection by describing a meaningful future and showing how today's priorities support it. At Southwest Gas, the explanation should connect the work to the people and communities the organization serves, using its actual vision, mission, and values.",
        "A vision becomes credible through repeated decisions and behavior. Employees notice whether leaders explain difficult choices, recognize contributions that support the direction, and stay engaged when progress is hard. This competency combines clarity and commitment with honest dialogue, so people can understand the purpose, raise concerns, and see a practical way to contribute."
      ],
      "essentials": [
        {
          "title": "Connect work with its purpose",
          "text": "Explain who benefits and why the outcome matters. Help employees see the connection between their responsibilities and the organization's positive impact."
        },
        {
          "title": "Make direction understandable",
          "text": "Use clear, consistent language for the vision, mission, and values. Translate broad statements into the choices and priorities people encounter in their work."
        },
        {
          "title": "Build credible optimism",
          "text": "Describe a worthwhile future while acknowledging the work, uncertainty, and constraints involved. Recognize progress without minimizing obstacles or employee concerns."
        },
        {
          "title": "Show commitment through decisions",
          "text": "Use the purpose and vision to explain tradeoffs, sustain attention, and support people through difficulty. Adapt the approach when evidence changes while keeping the intended outcome clear."
        }
      ],
      "growth": "Senior leaders connect the work of many groups to a shared direction. As responsibility broadens, the task includes helping other leaders explain that direction in their own setting, checking whether messages are understood consistently, and demonstrating commitment through resources and decisions. The emphasis is on organization-wide understanding and action, rather than the strength of one presentation.",
      "related": [
        "strategic-mindset",
        "communicates-effectively",
        "instills-trust",
        "ensures-accountability"
      ],
      "roles": {
        "senior_leader": {
          "focus": "Make the organization's purpose and future direction clear, meaningful, and credible across groups, including during difficult periods.",
          "good": "A leader consistently explains why the work matters, clarifies the organization's direction, and connects priorities to that purpose. Employees hear honest encouragement and see commitment when the work becomes difficult.",
          "great": "A leader makes the purpose memorable and useful in everyday decisions. Other leaders and employees can explain their contribution in their own words, and continued dialogue and visible follow-through sustain commitment through change.",
          "watch": [
            "Repeating a vision statement without connecting it to the work, decisions, or people it is intended to serve.",
            "Using an upbeat message that avoids genuine challenges or makes it difficult for employees to raise concerns.",
            "Promoting a priority in speeches while resource decisions, recognition, or personal follow-through send a different message."
          ],
          "examples": [
            "When introducing an improvement effort, a senior leader explains how the intended result will help customers and employees, then connects the proposed work to that impact. The message uses a relevant, factual example instead of relying only on project milestones.",
            "In a leadership meeting, a senior leader uses the organization's current vision, mission, and values to explain a difficult priority choice. The leader asks participants to describe the implications for their own teams and resolves differences in understanding.",
            "During a lengthy change, a senior leader uses team conversations, written updates, and recognition to show progress and acknowledge the effort involved. Questions about workload and obstacles are welcomed, and the next update explains how the concerns were addressed.",
            "When an important initiative meets resistance or a setback, a senior leader restates the outcome and why it matters, listens to the reasons for concern, and helps the team adjust its approach. The leader remains accountable for follow-through rather than treating a launch message as the end of their role."
          ],
          "practice": [
            {
              "title": "Connect one priority to a meaningful outcome",
              "action": "Prepare a brief explanation of a current priority using the organization's actual direction and values. Include who benefits, what will improve, and how employees can contribute. Test the explanation with people from different functions and revise unclear wording.",
              "evidence": "Listeners can explain the purpose and their contribution in their own words. Their questions reveal fewer conflicting interpretations after the message is refined."
            },
            {
              "title": "Check the message through the organization",
              "action": "Ask a small group of leaders to explain the same priority to their teams using relevant local examples. Gather the questions and interpretations they hear, then clarify gaps together before the next communication.",
              "evidence": "The leaders share a consistent explanation of the purpose while using examples appropriate to their teams. Follow-up communication answers the questions employees actually raised."
            },
            {
              "title": "Make commitment visible during a setback",
              "action": "Choose a current challenge affecting an important priority. Hold a discussion that acknowledges the difficulty, reconnects the work to the intended outcome, and agrees on practical support or a revised next step. Follow up on the commitments you make.",
              "evidence": "The group can identify the next action, the support available, and the follow-up date. Employees can point to a decision or action that demonstrates the leader's continued commitment."
            }
          ],
          "questions": [
            "Could people in different roles explain why this priority matters without repeating my exact words?",
            "Which recent decision made our purpose more credible, and which may have sent a mixed message?",
            "How am I sustaining commitment while making room for honest questions and concerns?"
          ]
        }
      },
      "tips": [
        {
          "title": "Move from the statement to the work",
          "body": "After explaining the broader purpose, identify a decision or task that illustrates it. Ask the audience how the direction applies to their responsibilities. Their answers show whether the connection is meaningful."
        },
        {
          "title": "Use examples that people can recognize",
          "body": "Choose accurate examples of employee contribution, customer impact, or progress toward an agreed outcome. Keep the example relevant to the audience and explain the behavior or decision it demonstrates. Avoid implying that one success removes the remaining challenges."
        },
        {
          "title": "Pair encouragement with a practical next step",
          "body": "Acknowledge what is difficult, explain why progress remains worthwhile, and identify what the group can do next. Credible optimism is supported by action, resources, and follow-through. It does not require people to hide concerns."
        },
        {
          "title": "Check for mixed signals",
          "body": "Compare your messages with what you prioritize, recognize, fund, and follow up on. If these point in different directions, explain the tradeoff or change the decision. Consistency helps others trust that the vision will guide the work."
        }
      ],
      "learningTopics": [
        "Communicating organizational purpose and strategic direction",
        "Leading through change with listening and credible optimism",
        "Translating vision and values into everyday decisions"
      ],
      "reflections": [
        "Who may still be unclear about how their work contributes to the direction I describe?",
        "Where have my decisions strengthened or weakened the message I want people to hear?",
        "What will I do at the next setback to demonstrate commitment and invite useful feedback?"
      ]
    }
  ]
};
