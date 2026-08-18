import { getContribution } from 'github-contribution-api';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await getContribution('harsh-git1610', {
      year: 'last',
      format: 'array',
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('GitHub contribution error:', error);

    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions' },
      { status: 500 }
    );
  }
}