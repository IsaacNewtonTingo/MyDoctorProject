import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from "react-native";
import SearchDropDown from "./searchDropDown";
import { Ionicons } from "@expo/vector-icons";

export default function SymptomSearch() {
  const [diagnosis] = useState([
    {
      disease1:
        "Headache is mainly associated with straining the body, denying it enough rest. If the headache is servere and non-ending, other conditions may be associated with it and immediate medical attention should be considered",
      disease2:
        "When combined with other symptoms like JOINT PAIN,FEVER, GENERAL BODY WEAKNESS, this might be a sign of malaria",
      treament:
        "Get adequate sleep,drink enough water, Get some caffeine,Ease Pressure on Your Scalp or Head",
      key: "head ache",
    },
    {
      disease1:
        "Food poisoning is the main condition associated with stomach ache. If it's servere, visit the nearest doctor as soon as possible",
      disease2:
        "If you're a lady then maybe you're just pregnant depending on the location of the pain",
      treament:
        "Drink water, take some ginger, avoid lying down,avoid difficult o digest foods",
      key: "stomach ache",
    },
    {
      disease1: "Inadequate rest",
      disease2:
        "May be a sign of Ovulation or monthly periods in ladies are close",
      treament:
        "Exercise to get muscles moving, apply pain relief cream,  Avoid prolonged static posture",
      key: "back ache",
    },
    {
      disease1: "Asthma, Tuberculosis,Pneumonia,Heart attack",
      disease2:
        "There are other causes like  MUSCLE STRAIN, INJURED RIBS and other physical actions upon chest area",
      treament: "Take some aspirin, hot drinks, garlic, apple cider vinegar",
      key: "chest pain",
    },
    {
      disease1:
        "Malaria. This is if you're experiencing other symptoms like HEADACHE JOINT PAIN,FEVER, GENERAL BODY WEAKNESS. A laboratory test needs to be done to exactly determine the condition ",
      disease2:
        "Covid-19 if it associated with cough, loss of taste,loss of smell, general body weakness",
      treament:
        "Rest and drink plenty of fluids, If you're uncomfortable, take acetaminophen (Tylenol, others), ibuprofen (Advil, Motrin IB, others) or aspirin",
      key: "fever",
    },
    {
      disease1:
        "May be an STI (e.g Genital herpes,Syphilis or Genital warts) or an allergy. Try to use protection during sexual intercose to protect you from STIs",
      disease2:
        "Yeast infection in ladies. Visit a medical facility for consultation to be sure of the condition",
      treament:
        "Visit a docotor for proper analysis of the situation and prescription",
      key: "rashes around pubic area",
    },
    {
      disease1: "UTI, a bacterial infection ",
      disease2:
        "It can also be due to inflammation of the urinary tract. The urethra, bladder, ureters, and kidneys make up your urinary tract.",
      treament:
        "Ibuprofen. A doctor will often encourage a person to drink more fluids as this dilutes urine, making it less painful to pass",
      key: "pain when urinating",
    },
    {
      disease1: "colon cancer",
      disease2:
        "Blood in stool means there is bleeding somewhere in your digestive tract. IMMEDIATE MEDICAL ATTENTION SHOULD BE SEEKED AS IT CAN BE A SERIOUS CONDITION",
      treament:
        "Visit a docotor for proper analysis of the situation and prescription",
      key: "blood in stool",
    },
    {
      disease1: "Tuberculosis if it is chronic. Asthma can also be a condition",
      disease2: "An allergic reaction",
      treament: "Honey tea, ginger, more fluids, Salt-water gargle",
      key: "coughing",
    },
    {
      disease1:
        "Corona virus/ Covid 19 if associated with signs like LOSS OF SMELL, CHRONIC COUGH, SNEEZING, LOSS OF BREATH",
      disease2:
        "salivary gland infection, sinusitis, poor dental hygiene, or even certain medicines",
      treament:
        "Try cold foods, which may be easier to taste than hot foods, Drink plenty of fluids, Brush your teeth before and after eating, Ask your doctor to recommend products that may help with dry mouth",
      key: "loss of taste",
    },
    {
      disease1:
        "Corona virus/ Covid 19 if associated with signs like LOSS OF TASTE, CHRONIC COUGH, SNEEZING, LOSS OF BREATH",
      disease2:
        "Nasal congestion from a cold, allergy, sinus infection, or poor air quality",
      treament:
        "If other COVID-19 symptoms are present, it’s best to seek medical help, ",
      key: "loss of smell",
    },
    {
      disease1: "Allergic reaction",
      disease2: "Inadequate rest",
      treament:
        "rest, cool compresses over closed eyes, lightly massaging the eyelids, gently washing the eyelids, and/or over-the-counter eye drops",
      key: "red eyes",
    },
    {
      disease1: "Arthritis",
      disease2:
        "Malaria when associated with other symptoms like, GENERAL BODY WEAKNESS,HEADACHE, FEVER ",
      treament:
        "Stay physically active and follow a fitness program focusing on moderate exercise, For other symptoms related to malaria, visit a physician for analysis and prescription",
      key: "joint pain",
    },
    {
      disease1: "Alergic reaction",
      disease2: "Pregnancy in ladies",
      nausea:
        "Drink clear or ice-cold drinks,Avoid fried, greasy, or sweet foods, Drink beverages slowly, Eat light, bland foods (such as saltine crackers or plain bread).",
      key: "nausea",
    },
    {
      disease1: "Jaundice",
      treament: "visit a doctor for proper analysis and prescription",
      key: "yellow skin",
    },
    {
      disease1: "Dehydration,weather, hot baths",
      disease2: "Harsh soap or some skin conditions(eczema)",
      treament:
        "Use coconut oil, Adjust your shower temperature, Antioxidants and omega-3s",
      key: "dry skin",
    },
    {
      disease1:
        "Bacterial infection caused by food poisoning. May also be caused by reaction to specific foods like junk",
      disease2: "Pregnancy in females.",
      treament:
        "Drink plenty of clear fluids such as water, Reduce your intake of coffee, tea and alcohol as these can make the pain worse, Sucking on mint candies might be another way to help reduce the pain and discomfort",
      key: "abdominal pain",
    },
    {
      disease1: "Chronic bronchitis, lung cancer,Tuberculosis,Pneumonia",
      disease2:
        "cystic fibrosis,trauma to the chest. May also be a sign of drug use like crack or cocaine",
      treament: "Visit a doctor for proper analysis",
      key: "coughing blood",
    },
    {
      disease1:
        "heredity, hormonal changes, medical conditions or a normal part of aging",
      disease2: "Is a common sign when on chemotherapy",
      treament: "Visit a doctor for proper analysis",
      key: "hair loss",
    },
    {
      disease1: "Eczema",
      disease2: "Alergic reaction to some something ",
      treament:
        "Need to visit a physician for analysisbut you can apply coconut oil, aloe vera, apple cider vinegar",
      key: "painless rashes on the back",
    },

    {
      disease1: "Anaemia",
      disease2: "Bloodstream infection,Low blood sugar or frostbite",
      treament: "taking iron, vitamin B-12, or folate supplements.",
      key: "pale skin",
    },
    {
      disease1: "Anaemia",
      treament: "taking iron, vitamin B-12, or folate supplements.",
      key: "pale eyes",
    },
    {
      disease1:
        "Stress and anxiety, or because you've had too much caffeine, nicotine, or alcohol",
      disease2:
        "can also happen when you're pregnant. In rare cases, palpitations can be a sign of a more serious heart condition",
      treament:
        "Keep hydrated, Exercise regularly, Avoid excessive alcohol use, Reduce or eliminate stimulant intake",
      key: "palpitations",
    },
    {
      disease1:
        "urinary tract infection,urethritis,certain medications, such as diuretics,interstitial cystitis, a type of inflammation of the bladder wall",
      disease2:
        "pregnancy in females,a tumor or mass in the pelvic area,a bladder tumor",
      treament:
        "Proper diet and avoiding excess fluids and foods that act as diuretics can reduce urinary frequency. Kegel exercises can keep the pelvic-floor muscles well toned and may help stave off urinary frequency as one ages",
      key: "frequent urination",
    },
    {
      disease1:
        "lung problems, such as asthma and chronic obstructive pulmonary disease (COPD),infections in the airways, such as croup, bronchitis, pneumonia, COVID-19, the flu and even a cold",
      disease2:
        "heart problems, such as a cardiovascular disease and heart failure",
      treament:
        "Resting while sitting can help relax your body and make breathing easier. Visit a doctor as early as possible for better examination",
      key: "breathing difficulty",
    },
    {
      disease1:
        "Swallowing air (this can happen when you chew gum, smoke, or eat too fast)",
      disease2:
        "Constipation,Overeating,Weight gain,Menstruation (in some women)",
      treament:
        "Increase fiber gradually, Cut down on salt, Get more active every day,Drink plenty of water, Try using probiotics",
      key: "bloating",
    },
    {
      disease1: "Brain tumor",
      disease2: "Aneurysm",
      treament:
        "Apply a heating pad or ice pack to your head for 5 to 10 minutes several times a day. Take a hot bath or shower to relax tense muscles. Improve your posture. Take frequent computer breaks to prevent eye strain.",
      key: "pressure around head",
    },
    {
      disease1:
        "sudden drop in blood pressure,heart muscle disease,decrease in blood volume,anxiety disorders,anemia (low iron)",
      disease2: "hypoglycemia (low blood sugar),ear infection,dehydration",
      treament:
        "lying down and closing the eyes, drinking plenty water, getting plenty of sleep, acupuncture",
      key: "dizziness",
    },
    {
      disease1:
        "Injury to the eyes. Injury to the eyes while playing or at work or due to accidents may result in vision loss and impairment",
      disease2:
        "Inherited conditions of blindness and vision impairment,Infections of the eyes,Glaucoma,Age related Macular degeneration",
      treament:
        "eyeglasses, contact lenses, and eye drops or other medicines. In some cases, surgery may be required",
      key: "visual impairement",
    },
    {
      disease1:
        "digestive conditions, such as irritable bowel syndrome and Crohn's disease",
      disease2:
        "a hormonal condition known as Addison's disease,HIV and AIDS,high calcium levels in the blood,chronic liver or kidney disease,diabetes,asthma",
      treament:
        "consider focusing on eating just one large meal per day, with light snacks in between. Eating frequent small meals can also be helpful, and these are usually easier on the stomach than large meals. Light exercise may also help increase appetite",
      key: "loss of appetite",
    },
    {
      disease1: "Common cold",
      disease2: "Nasal and seasonal allergies, including allergies to mold",
      treament:
        "Use a humidifier or vaporizer, Take long showers or breathe in steam from a pot of warm (but not too hot) water, Drink lots of fluids, Place a warm, wet towel on your face",
      key: "blocked sinuses",
    },
    {
      disease1: "Allergies,dry eyes,ingrown eye lashes,blocked tear duct",
      disease2: "Eyelid Problems,Problems With Your Cornea.",
      treament:
        "Prescription eye drops, antibiotics if you have an eye infection, a surgical procedure to clear blocked tear ducts, a warm, wet towel placed on your eyes several times a day, which can help with blocked tear ducts ",
      key: "watery eyes",
    },
    {
      disease1:
        "It comes from Nitrogen bubbles in the synovial fluid that get trapped then released during particular movements",
      treament: "get up and move as much as you can during the day",
      key: "creaking joints when walking",
    },
    {
      disease1:
        "Some environmental causes of peeling hands include the sun, dry air, cold weather, and excessive hand-washing",
      disease2:
        "Some medical causes of peeling hands include allergies, eczema, psoriasis, infections, or acral peeling skin syndrome",
      treament:
        "Exfoliate your face to get rid of skin that's peeling, but do it the right way. If your skin is peeling, avoid using a cleanser with alpha hydroxy acids, alcohol, or perfume. Try using lukewarm water and a soft washcloth or shower mitt to gently rub the skin on your face and loosen any skin that's flaking",
      key: "peeling skin on face",
    },
    {
      disease1:
        "The cause of geographic tongue is unknown. Several factors have been proposed as possible causes such as emotional stress, psychological factors, habits, allergies, diabetes and hormonal disturbances. However, none of these factors have been conclusively linked to geographic tongue",
      treament:
        "anesthetic and antihistamine mouthwash. oral pain relievers. corticosteroid rinses",
      key: "geographic tongue",
    },
    {
      disease1:
        "Muscle or ligament strain. Repeated heavy lifting or a sudden awkward movement can strain back muscles and spinal ligaments",
      disease2:
        "Arthritis, bulging or ruptured disks. Disks act as cushions between the bones (vertebrae) in your spine",
      treament:
        "Ice is best if your back is bothered by swelling or inflammation. A heating pad may be better if you're trying to relax stiff or tight muscles",
      key: "lower back pain",
    },
    {
      disease1:
        "Your stool can be yellow because of your diet. Some causes of this are eating foods high in food coloring, carrots, or sweet potatoes. It may also be from certain gluten products or a diet high in fats",
      disease2:
        "intestinal infection. These types of infections are often accompanied by other symptoms like abdominal pain and diarrhea. In these cases, poop usually turns yellow because the inflamed intestines are unable to properly absorb fat from consumed food.",
      treament:
        "Avoiding fatty foods, processed foods, gluten, or anything that causes an upset stomach",
      key: "yellow stool",
    },
    {
      disease1: "Rheumatoid arthritis (RA),Osteoarthritis (OA),Lupus",
      disease2: "Bursitis,Bone cancer",
      treament:
        "Use hot and cold therapy Heat treatments can include taking a long, warm shower or bath in the morning to help ease stiffness and using an electric blanket or moist heating pad to reduce discomfort overnight. Cold treatments can help relieve joint pain, swelling, and inflammation",
      key: "joint stiffness",
    },

    {
      disease1: "Covid 19 if acoompanied with fever adn fatigue",
      disease2:
        "Asthma.The cough is often productive, meaning a person brings up phlegm. However, in a type of asthma called cough-variant asthma, the main symptom people experience is a dry cough.",
      treament:
        "In case of ASTHMA, a quick-relief inhaler, such as a short-acting beta-2-agonist, for treating symptoms when they flare-up. long-term medications, such as a low-dose corticosteroid inhaler, for reducing inflammation and preventing future attacks. There is currently no cure for COVID-19, but paracetamolTrusted Source may help relieve symptoms. People should rest at home and keep away from other people as far as possible.",
      key: "dry cough",
    },
    {
      disease1: "Common cold,Allergies, Nasal and sinus infection",
      disease2: "Coronavirus disease,Decongestant nasal spray overuse",
      treament:
        "Drink plenty fluids, facial steams,Hot shower, Eating spicy foods",
      key: "runny nose",
    },

    //Start from here

    {
      disease1:
        "too much earwax in the Eustachian tube,sinus infections,middle ear infections",
      disease2:
        "water in your ear,a change in altitude (you may have noticed problems when you fly),allergies",
      treament:
        " try swallowing, yawning or chewing sugar-free gum to open your eustachian tubes,If this doesn't work, take a deep breath and try to blow out of your nose gently while pinching your nostrils closed and keeping your mouth shut. If you hear a popping noise, you know you have succeeded.",
      key: "blocked ears",
    },

    {
      disease1:
        "environmental exposures that lead to irritation, including saliva and licking your lips, spicy foods, and cold, dry weather,The common cold and sun damage can also cause chapped lips",
      disease2:
        "Some medication like Isotretinoin cause dry lips. Other medications like cholesterol-lowering agents can also cause dry lips",
      treament:
        " Apply a non-irritating lip balm (or lip moisturizer) several times a day and before bed. If your lips are very dry and cracked, try a thick ointment, such as white petroleum jelly. Ointment seals in water longer than waxes or oils.",
      key: "dry lips",
    },
    {
      disease1:
        "Irritated, oily skin,A yeastlike fungus (malassezia) that feeds on oils on the scalps of most adults.",
      disease2:
        "Dry skin,Sensitivity to hair care products (contact dermatitis),Other skin conditions, such as psoriasis and eczema",
      treament:
        " For mild dandruff, first try regular cleansing with a gentle shampoo to reduce oil and skin cell buildup. If that doesn't help, try a medicated dandruff shampoo",
      key: "dandruff",
    },
    {
      disease1:
        "Urinary tract infections. These occur when bacteria enter your body through the urethra and multiply in your bladder,Kidney injury.",
      disease2:
        "Kidney infections (pyelonephritis),A bladder or kidney stone,Enlarged prostate,Kidney disease,Cancer,Inherited disorders",
      treament: " hfhfhsj",
      key: "urinating blood",
    },
    {
      disease1:
        "Bronchitis. Chronic bronchitis is often behind the appearance of blood,pneumonia",
      disease2:
        "A prolonged or severe cough,A severe nosebleed,Drug use,Anticoagulants,Chronic obstructive pulmonary disease (COPD)",
      treament:
        " It is adviced to visit a doctor for proper exmining to identify the exact cause and prescribe relevant medication",
      key: "blood in mucus",
    },
    {
      disease1: "reaction to some medication, ",
      disease2: "allergic reaction,conditions like eczema",
      treament:
        " It is adviced to visit a doctor for proper exmining to identify the exact cause and prescribe relevant medication",
      key: "body rashes",
    },
    {
      disease1:
        "Seasonal allergies, Perennial allergies,Airborne irritants, Infection.",
      disease2: "Dry eye, Eyestrain, Contact lenses Blepharitis.",
      treament:
        " If you are dealing with a mild case of allergy-related itching, a cold cloth or compress over the eyes can help temporarily ease the discomfort. Artificial Tears. Frequent use of chilled over-the-counter, lubricating eye drops can relieve symptoms. Anti-allergy Eyedrops or Oral Medications.",
      key: "itchy eyes",
    },
    {
      disease1:
        "Medications, Lack of exercise, Not enough liquids, Not enough fiber in the diet.",
      disease2:
        "Irritable bowel syndrome, Ignoring the urge to have a bowel movement, Changes in habits or lifestyle, such as travel, pregnancy, and old age, Problems with intestinal function.",
      treament:
        "Prune juice. The most popular juice to relieve constipation is prune juice,Apple juice. Apple juice may provide you with a very gentle laxative effect, Change what you eat and drink. Changing what you eat and drink may make your stools softer and easier to pass, Get regular physical activity, Stop taking certain medicines or dietary supplements  ",
      key: "constipation",
    },
    {
      disease1:
        "Many people have allergies to both indoor and outdoor substances, such as pet dander, pollen, and dust mites",
      disease2:
        "Allergies can be seasonal or last all year long. They can cause an irritating inflammation in your nose that may give you a tickly, itchy feeling",
      treament:
        " Take over-the-counter (OTC) allergy drugs,Blow your nose less, Use a humidifier, Try capsaicin nasal spray",
      key: "itchy nose",
    },
    {
      disease1:
        "Meniere's disease, acoustic neuroma, viral or bacterial infection, physical damage to the ear",
      disease2:
        "head trauma, circulatory system disorders, genetic or inherited disorders",
      treament:
        " visit a doctor to analyze the exact cause of your condition and prescribe the right medication",
      key: "loss of hearing in one ear",
    },
    {
      disease1:
        "An ear infection, trauma, a mass (cholesteatoma), fluid, or an object in the ear (such as wax buildup) ",
      disease2:
        "Sensorineural hearing loss happens most often from damage to the hair cells in the inner ear. Other causes include damage to the nerve for hearing, called the auditory nerve, or the brain",
      treament:
        " visit a doctor to analyze the exact cause of your condition and prescribe the right medication",
      key: "loss of hearing in both ears",
    },
    {
      disease1:
        "Brushing too hard, Any bleeding disorders, Hormonal changes during pregnancy, Ill-fitting dentures or other dental appliances",
      disease2:
        "Improper flossing, Infection, which can be either in a tooth or the gum, Leukemia, a type of blood cancer, Scurvy, a vitamin C deficiency",
      treament:
        " visit a doctor to analyze the exact cause of your condition and prescribe the right medication",
      key: "bleeding gums",
    },
    {
      disease1:
        "Tooth decay, Abscessed tooth (a bacterial infection inside the center of the tooth), Tooth fracture (broken tooth).",
      disease2:
        "A damaged filling, Repetitive motions, such as chewing gum or grinding or clenching teeth Infected gums",
      treament: " visit a dentist to corrently identify the cause of the pain ",
      key: "toothache",
    },
    {
      disease1:
        "Gum Disease. One cause of tooth loss is untreated gingivitis, Osteoporosis",
      disease2: "Tooth Trauma, Pregnancy Hormones",
      treament: " visit a dentist to corrently identify the cause of the pain",
      key: "loose tooth/teeth",
    },
    {
      disease1: "Acute myeloid leukaemia",
      disease2: "",
      treament:
        " You should see your Doctor if you or your child have possible symptoms of AML. Although it's highly unlikely that leukaemia is the cause, these symptoms should be investigated.",
      key: "pale skin, tiredness, breathlessness, frequent infections, unusual and frequent bleeding, such as bleeding gums or nosebleeds",
    },
    {
      disease1: "Acute pancreatitis",
      disease2: "",
      treament:
        " Contact your Doctor immediately if you suddenly develop severe abdominal pain",
      key: "severe pain in the centre of your abdomen, feeling or being sick, diarrhoea",
    },
    {
      disease1: "Alzheimer's disease",
      disease2: "",
      treament:
        " There's no cure for Alzheimer's disease, but medication is available that can help relieve some of the symptoms and slow down the progression of the condition in some people.",
      key: "confusion, disorientation and getting lost in familiar places",
    },
    {
      disease1: "Anorexia",
      disease2: "",
      treament:
        " talking therapies, such as cognitive behavioural therapy (CBT), which aim to change the person’s thoughts, feelings, and behaviour around food. Nutritional support is also offered to help them gain weight safely",
      key: "fear of being fat",
    },
    {
      disease1: "Appendicitis: Painful swelling of the appendix",
      disease2: "",
      treament:
        " In most cases of appendicitis, the appendix needs to be surgically removed as soon as possible",
      key: "pain in the middle of your tummy (abdomen) that may come and go",
    },
    {
      disease1: "Arthritis",
      disease2: "",
      treament:
        " Visit a doctor in case you xperience such symptoms for diagnosis and medication",
      key: "joint pain, tenderness and stiffness, inflammation in and around the joints, restricted movement of the joints, warm, red skin over the affected joint, weakness and muscle wasting",
    },
    {
      disease1: "Attention deficit hyperactivity disorder (ADHD)",
      disease2: "",
      treament:
        " Although there's no cure for ADHD, it can be managed with appropriate educational support, advice and support for parents and affected children, alongside medication, if necessary",
      key: "inattentiveness, hyperactivity and impulsiveness",
    },
    {
      disease1: "Bacterial vaginosis",
      disease2: "",
      treament:
        " Visit a gaenacologist but it is usually treated with antibiotics. An antibiotic cream or gel to use in the vagina may be given instead of antibiotic tablets by mouth",
      key: "watery,white or grey,unpleasant fishy smell from vagina",
    },
    {
      disease1: "Bipolar disorder",
      disease2: "",
      treament:
        " medication to prevent episodes of mania, hypomania (less severe mania) and depression – these are known as mood stabilisers and are taken every day on a long-term basis. psychological treatment – such as talking therapy, which can help you deal with depression, and provides advice about how to improve your relationships",
      key: "mood swings, depression,feeling very high and overactive",
    },
    {
      disease1: "Brain tumor",
      disease2: "",
      treament:
        " See your Doctor if you have persistent symptoms of a brain tumour. While it's unlikely to be a tumour, it's best to be sure by getting a proper diagnosis.",
      key: "severe persistent headache,seizures, persistent nausea, vomiting and drowsiness, mental or behavioural changes, such as memory problems or changes in personality, progressive weakness or paralysis on one side of the body, vision problems, or speech problems ",
    },
    {
      disease1: "Breast cancer",
      disease2: "",
      treament:
        " Visit a general practitioner for analysis and further advice ",
      key: "lump or area of thickened breast tissue",
    },
    {
      disease1:
        "Brochitis: Infection of the main airways of the lungs (bronchi), causing them to become irritated and inflamed",
      disease2: "",
      treament:
        " In most cases, bronchitis will clear up by itself within a few weeks without the need for treatment. This type of bronchitis is known as acute bronchitis. While you are waiting for it to pass, you should drink lots of fluid and get plenty of rest. Visit a doctor for analysis on servere cases",
      key: "cough, yellow-grey mucus, sore throat, wheezing",
    },
    {
      disease1: "Cervical cancer",
      disease2: "",
      treament:
        " For such a condition, you first need to visit a medical practitioner for analysis",
      key: "vaginal bleeding, which can occur after sex, in between periods or after the menopause.",
    },
    {
      disease1:
        "Chickenpox: A mild and common childhood illness that most children catch at some point.",
      disease2: "",
      treament:
        "Paracetamol to relieve fever, and calamine lotion and cooling gels to ease itching.",
      key: "red, itchy spots that turn into fluid-filled blisters",
    },
    {
      disease1: "Chlamydia",
      disease2: "",
      treament:
        " Antibiotics will get rid of the chlamydia infection.You should also avoid having sex until one week after you and your partner(s) have been treated. This includes oral sex and sex using a condom.",
      key: "pain when peeing, unusual discharge from the vagina, penis or rectum (back passage), pain in the lower tummy, bleeding after sex, and bleeding between periods, pain in the testicles, red, sticky eyes",
    },
    {
      disease1: "Cirrhosis",
      disease2: "",
      treament:
        " Check in with a medical practitioner when you experience such symptoms for proper check up and prescription",
      key: "loss of appetite, nausea, itchy skin, jaundice, vomiting blood, dark, tarry-looking stools, and a build-up of fluid in the legs",
    },
    {
      disease1: "Crohn's disease",
      disease2: "",
      treament:
        " Check in with a medical practitioner when you experience such symptoms for proper check up and prescription",
      key: "diarrhoea, abdominal pain, fatigue (extreme tiredness), unintended weight loss, blood and mucus in your faeces (stools)",
    },
    {
      disease1: "Dementia",
      disease2: "",
      treament: " Cholinesterase inhibitors",
      key: "memory loss, difficulty concentrating, mood changes",
    },

    {
      disease1: "Diabetes",
      disease2: "",
      treament: " With this symptoms, visit a doctor for diagosis",
      key: "thirst,frequent urination,tired,weight loss ",
    },
    {
      disease1: "Down's syndrome",
      disease2: "",
      treament:
        " Down syndrome cannot be cured. Early treatment programs can help improve skills. They may include speech, physical, occupational, and/or educational therapy.",
      key: "flattened face,short neck,small ears,Small ears,tongue that tends to stick out of the mouth,Small hands and feet,Tiny white spots on the iris",
    },
    {
      disease1: "Erectile dysfunction (impotence)",
      disease2: "",
      treament:
        " Medication, such as sildenafil (sold as Viagra), can be used to manage it in at least two-thirds of cases. Vacuum pumps that encourage blood to flow to the penis and cause an erection are also successful in 90% of cases. Sex therapy",
      key: "inability to get and maintain an erection",
    },
    {
      disease1: "Eye cancer",
      disease2: "",
      treament:
        " Check in with a medical practitioner when you experience such symptoms for proper check up and prescription",
      key: "shadows, flashes of light, or wiggly lines in your vision,blurred vision,a dark patch in your eye that's getting bigger,partial or total loss of vision,bulging of one eye",
    },
    {
      disease1:
        "Fibroids:Non-cancerous growths that develop in or around the womb (uterus).",
      disease2: "",
      treament:
        " Check in with a medical practitioner when you experience such symptoms for proper check up and prescription",
      key: "tummy (abdominal) pain,heavy periods or painful periods,lower back pain,pain or discomfort during sex,constipation,a frequent need to urinate",
    },
    {
      disease1: "Food poisoning",
      disease2: "",
      treament:
        " Most people with food poisoning recover at home and don't need any specific treatment,drink fluids",
      key: "vomiting,diarrhoea,abdominal pain",
    },
    {
      disease1: "Gallbladder cancer",
      disease2: "",
      treament:
        " First visit a physician. The main treatment for gallbladder cancer is surgery to remove the gallbladder and possibly some of the surrounding tissue",
      key: "abdominal pain,feeling sick yellowing of the skin ",
    },
    {
      disease1: "Genital herpes",
      disease2: "",
      treament:
        " Anti-viral medication can help speed up the healing process and reduce the severity of an episode, if needed",
      key: "red bumps around the genital area,pain inside the vagina, head of penis or back passage,pain peeing or being unable to pee,mild swelling of the lymph glands in the groin, armpits and neck,flu-like symptoms, backache, headache and a temperature",
    },
    {
      disease1: "Gonorrhoea",
      disease2: "",
      treament: " antibiotics usually given as an injection",
      key: "green or yellow fluid coming out of the penis,burning sensation when peeing,swelling of the testicles,discharge from the vagina,pain in the lower tummy, particularly during sex",
    },
    {
      disease1: "Hand, foot and mouth disease",
      disease2: "",
      treament:
        " There's no cure for it, so you have to let it run its course.",
      key: "mouth ulcers and spots on the hands and feet",
    },
    {
      disease1: "Hepatitis B",
      disease2: "",
      treament:
        " Check in with a medical practitioner when you experience such symptoms for proper check up and prescription",
      key: "loss of appetite,feeling and being sick,diarrhoea,abdominal pain,yellowing of the skin and eyes",
    },
    {
      disease1: "Hypoglycaemia (low blood sugar)",
      disease2: "",
      treament:
        " have some food or drink that contains sugar, such as dextrose tablets or fruit juice, to correct your blood glucose levels.",
      key: "feeling hungry, trembling or shakiness, and sweating",
    },
    {
      disease1: "Indigestion",
      disease2: "",
      treament:
        " changes to their diet and lifestyle, or with a number of different medications, such as antacids.",
      key: "bloated,feeling sick,belching",
    },
    {
      disease1: "Kidney cancer",
      disease2: "",
      treament:
        " Check in with a medical practitioner when you experience such symptoms for proper check up and prescription",
      key: "blood in your urine,lump or swelling in the kidney area",
    },
    {
      disease1: "Kidney stones",
      disease2: "",
      treament:
        " keyhole surgery may be needed to remove very large kidney stones directly,To avoid getting kidney stones, make sure you drink plenty of water",
      key: "severe pain, nausea, vomiting, fever, chills and blood in your urine",
    },
    {
      disease1: "Lung Cancer",
      disease2: "",
      treament:
        " Check in with a medical practitioner when you experience such symptoms for proper check up and prescription",
      key: "persistent cough,coughing blood,persistent breathlessness,unexplained tiredness and weight loss,pain when breathing or coughing",
    },
    {
      disease1: "Measles",
      disease2: "",
      treament:
        " Check in with a medical practitioner when you experience such symptoms for proper check up and prescription",
      key: "small greyish-white spots on the inside of the cheeks,fever,runny nose,sore, red eyes",
    },
    {
      disease1: "Ulcers",
      disease2: "",
      treament:
        " Antibiotic medications,Medications that block acid production and promote healing,Antacids that neutralize stomach acid",
      key: "burning pain in your middle or upper stomach between meals or at night,Nausea or vomiting,",
    },
  ]);

  const [filtered, setFiltered] = useState(diagnosis);
  const [searching, setSearching] = useState(false);

  const onSearch = (text) => {
    if (text) {
      setSearching(true);
      const temp = text.toLowerCase();

      const tempList = diagnosis.filter((item) => {
        if (item.key.match(temp)) return item.key;
      });
      setFiltered(tempList);
    } else {
      setSearching(false);
      setFiltered(diagnosis);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <View style={styles.icon}>
          <Ionicons name="search" size={25} color="black" />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter symptom e.g Headache"
          onChangeText={onSearch}
        />
      </View>

      {searching && <SearchDropDown diagnosis={filtered} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "black",
    flex: 1,
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 50,
    margin: 20,
  },
  icon: {
    position: "absolute",
    zIndex: 1,
    paddingLeft: 35,
    top: 30,
  },
});
