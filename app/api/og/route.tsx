import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get title from search params or use default
    const title = searchParams.get('title') || 'FlightPhase | Elite Athletic Training';
    const subtitle = searchParams.get('subtitle') || 'Transform your athletic performance';
    
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'linear-gradient(to bottom, #030456, #02085C, #030456)',
            fontSize: 60,
            letterSpacing: -2,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            {/* You can add your logo here */}
            <span style={{ color: 'white', fontSize: 40, fontWeight: 800 }}>FLIGHTPHASE</span>
          </div>
          <div style={{ color: 'white', marginBottom: 20 }}>{title}</div>
          <div style={{ color: '#ffffff99', fontSize: 30, marginTop: 10 }}>
            {subtitle}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
} 