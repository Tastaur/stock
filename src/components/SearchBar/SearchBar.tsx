import React, { FC } from 'react';
import { Button, IconButton, Stack, useMediaQuery } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useTheme } from '@emotion/react';
import { Check, Close } from '@mui/icons-material';

import { SearchBarForm, SearchBarProps } from './types';
import { DEFAULT_SEARCH_FORM } from './constants';
import { StyledTextField } from './styles';


export const SearchBar: FC<SearchBarProps> = ({ form, onClear, onSubmit }) => {
  const { control, handleSubmit, reset } = useForm<SearchBarForm>({
    defaultValues: { searchText: form.searchText ?? '' },
  });
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Stack
      component="form"
      flexDirection="row"
      gap={3}
      paddingX={2}
      alignItems="center"
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => {
        onClear();
        reset(DEFAULT_SEARCH_FORM);
      }}>
      <Controller
        control={control}
        name="searchText"
        render={({ field }) => (
          <StyledTextField
            size="small"
            {...field}
            label="Company name" />
        )}
      />
      {isSmall ? <IconButton type="submit"><Check /></IconButton> : <Button type="submit" variant="contained">Submit</Button>}
      {isSmall ? <IconButton type="reset"><Close /></IconButton> : <Button type="reset" variant="contained">Reset</Button>}
    </Stack>
  );
};

