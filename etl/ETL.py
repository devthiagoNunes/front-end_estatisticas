import pandas as pd
import config.cnae_structure as cnae_structure
import config.column_names as column_names
import config.sectors as sectors

def load_database(file_path):
    """
    ETL process for the data.
    """
    df = pd.read_csv(file_path,encoding='latin1',sep=';',dtype = str)
    return df

def etl_database(df):
    df.rename(columns=column_names.column_names(), inplace=True) # mudança de nomes
    df['setores'] = df['secao_atividade'].replace(sectors.sectors()) # mudança de setores
    df['data_inicio_atividades'] = pd.to_datetime(df['data_inicio_atividades'],errors='ignore') # mudança de tipo de dados
    df['data_termino_atividades'] = pd.to_datetime(df['data_termino_atividades'],errors='ignore')
    df['data_extincao_empresa'] = pd.to_datetime(df['data_extincao_empresa'],errors='ignore')
    df['secao_atividade'] =  df['secao_atividade'].replace(cnae_structure.cnae_structure())
    return df

df = load_database('../database/Relatório SIARCO 03-11-2021.csv')

df = etl_database(df)

df.to_csv('../database/relatorio_tratado.csv', index=False, sep=';')