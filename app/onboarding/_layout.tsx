// app/onboarding/_layout.tsx
/**
 * Layout para las pantallas de onboarding.
 * Envuelve las 5 pantallas del cuestionario inteligente para personalizar la experiencia del usuario.
 */
import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen name="step1" options={{ title: 'Paso 1' }} />
      <Stack.Screen name="step2" options={{ title: 'Paso 2' }} />
      <Stack.Screen name="step3" options={{ title: 'Paso 3' }} />
      <Stack.Screen name="step4" options={{ title: 'Paso 4' }} />
      <Stack.Screen name="step5" options={{ title: 'Paso 5' }} />
    </Stack>
  );
}