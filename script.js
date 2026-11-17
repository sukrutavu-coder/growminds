const T=[["Anxiety & Stress Management","Dealing with constant worry, racing thoughts, panic attacks or mental exhaustion? We help you understand your triggers and develop healthier ways to manage anxiety and everyday stress."],
["Depression & MoodSwings","Experiencing sadness, hopelessness, loss of interest or emotional exhaustion? Get compassionate support to navigate difficult emotions and gradually regain a sense of balance."],
["Obsessive-Compulsive Disorder (OCD)","Struggling with repetitive thoughts, unwanted urges or compulsive behaviours? Counselling can help you understand these patterns and explore effective coping strategies."],
["Adult ADHD","Finding it difficult to concentrate, manage time, stay organised or control impulsive behaviour? Explore practical strategies to improve daily functioning and build confidence."],
["Social Anxiety & Phobias","Does the fear of social situations, public interactions or specific experiences affect your daily life? We help you work through fears and develop greater confidence."],
["Marital & Relationship Counselling","Experiencing communication gaps, frequent disagreements, trust issues or emotional distance in your relationship? We help couples understand each other, resolve conflicts and build healthier connections."],
["Family & Parenting Counselling","Facing family conflicts, parenting challenges or communication difficulties with children and teenagers? Strengthen family relationships through better understanding and supportive guidance."],
["Anger & Emotional Management","Finding it difficult to manage anger, frustration or emotional reactions? Understand your triggers and learn healthier ways to express and regulate emotions."],
["Self-Esteem, Confidence & Personal Growth","Struggling with self-doubt, comparison, identity concerns or low confidence? Build self-awareness, develop a positive self-image and recognise your strengths."],
["Women’s Mental Health","Experiencing emotional or psychological challenges related to hormonal changes, reproductive health, fertility or other women’s health concerns? Find a supportive space to discuss your concerns."],
["Work Stress & Burnout","Feeling overwhelmed by professional responsibilities, workplace pressure or constant exhaustion? Learn to manage stress, establish healthy boundaries and restore work-life balance."],
["Teen Counselling","Supporting children and teenagers through emotional, behavioural, academic or social challenges with age-appropriate guidance and care."],
["Trauma & Emotional Distress","Navigating difficult past experiences, emotional pain or distressing memories? Access compassionate support at your own pace in a safe and understanding environment."],
["Geriatric Counselling ","Providing emotional support for older adults experiencing loneliness, life transitions, adjustment difficulties or other age-related emotional challenges."],
["Addiction Recovery","Addiction recovery starts with the right support. Our counselling offers a safe, non-judgemental space to address challenges, build healthier coping habits and take positive steps towards a balanced, healthier life."],
["Middle Age Crisis","We support individuals navigating midlife challenges, emotional changes and uncertainty about life, relationships or career. Our counselling provides a safe, supportive space to rediscover purpose, build confidence and embrace life's next chapter with clarity and balance."],
["Postpartum Counselling","Adjusting to life after childbirth can bring many emotions and challenges. Our postpartum counselling offers new mothers a warm, safe space to express their feelings, navigate stress and anxiety, and feel understood. With compassionate guidance, we help mothers build confidence and embrace this new chapter at their own pace."]];
document.getElementById('topics').innerHTML=T.map(t=>`<div class="topic"><h3>${t[0].replace(/&/g,'&amp;')}</h3><p>${t[1]}</p></div>`).join('');
const S=[...document.querySelectorAll('.slide')],D=document.getElementById('dots');let i=0,tm;
S.forEach((_,n)=>{const b=document.createElement('button');b.className='dot';b.setAttribute('aria-label','Go to slide '+(n+1));b.onclick=()=>go(n,true);D.appendChild(b)});
function go(n,user){i=(n+S.length)%S.length;S.forEach((s,k)=>s.classList.toggle('on',k===i));[...D.children].forEach((d,k)=>d.setAttribute('aria-current',k===i));if(user)clearInterval(tm)}
document.querySelector('.prev').onclick=()=>go(i-1,true);document.querySelector('.next').onclick=()=>go(i+1,true);
go(0);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)tm=setInterval(()=>go(i+1),6000);
const certificateSlides=[...document.querySelectorAll('.certificate-slide')],certificateDots=document.getElementById('certificate-dots');
if(certificateSlides.length&&certificateDots){
let certificateIndex=0;
certificateSlides.forEach((_,n)=>{const b=document.createElement('button');b.type='button';b.className='certificate-dot';b.setAttribute('aria-label','Show certificate '+(n+1));b.onclick=()=>showCertificate(n);certificateDots.appendChild(b)});
function showCertificate(n){certificateIndex=(n+certificateSlides.length)%certificateSlides.length;certificateSlides.forEach((slide,k)=>{slide.hidden=k!==certificateIndex});[...certificateDots.children].forEach((dot,k)=>dot.setAttribute('aria-current',k===certificateIndex?'true':'false'))}
document.querySelector('.certificate-prev').onclick=()=>showCertificate(certificateIndex-1);
document.querySelector('.certificate-next').onclick=()=>showCertificate(certificateIndex+1);
showCertificate(0);
}
const headerShell=document.querySelector('.header-shell'),menuTriggers=[...document.querySelectorAll('.nav-menu-trigger')],mobileMenuToggle=document.querySelector('.mobile-menu-toggle');
function closeDropdowns(){menuTriggers.forEach(trigger=>{trigger.setAttribute('aria-expanded','false');document.getElementById(trigger.getAttribute('aria-controls')).hidden=true})}
function closeMenus(){closeDropdowns();headerShell.classList.remove('mobile-open');mobileMenuToggle.setAttribute('aria-expanded','false')}
menuTriggers.forEach(trigger=>trigger.addEventListener('click',()=>{const panel=document.getElementById(trigger.getAttribute('aria-controls')),open=panel.hidden;closeDropdowns();if(open){panel.hidden=false;trigger.setAttribute('aria-expanded','true')}}));
mobileMenuToggle.addEventListener('click',()=>{const open=mobileMenuToggle.getAttribute('aria-expanded')!=='true';if(open){mobileMenuToggle.setAttribute('aria-expanded','true');headerShell.classList.add('mobile-open')}else closeMenus()});
headerShell.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenus));
document.addEventListener('click',event=>{if(!headerShell.contains(event.target))closeMenus()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenus()});
