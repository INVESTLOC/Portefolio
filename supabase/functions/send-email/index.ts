// import { Resend } from 'npm:resend@1.0.0';

// const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

// const corsHeaders = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
//   'Access-Control-Allow-Methods': 'POST, OPTIONS',
// };

// Deno.serve(async (req) => {
//   if (req.method === 'OPTIONS') {
//     return new Response(null, { headers: corsHeaders });
//   }

//   try {
//     const { name, email, message } = await req.json();
//     console.log("Données reçues :", { name, email, message });
  
//     const data = await resend.emails.send({
//       from: 'Portfolio Contact <onboarding@resend.dev>',
//       to: 'christ.hounkanrin@epitech.eu',
//       subject: `Nouveau message de ${name}`,
//       html: `
//         <h2>Nouveau message de votre portfolio</h2>
//         <p><strong>Nom:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });
  
//     console.log("Email envoyé avec succès :", data);
  
//     return new Response(JSON.stringify(data), {
//       headers: { ...corsHeaders, 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error("Erreur lors de l'envoi :", error);
//     return new Response(JSON.stringify({ error: error.message || "Erreur inconnue" }), {
//       status: 500,
//       headers: { ...corsHeaders, 'Content-Type': 'application/json' },
//     });
//   }
  
// });